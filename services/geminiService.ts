
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { PronunciationFeedback } from "../types";

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const getPronunciationFeedback = async (
  audioBase64: string,
  targetSentence: string
): Promise<PronunciationFeedback> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `You are a supportive English coach helping a Korean student. 
  Target Sentence: "${targetSentence}"
  
  TASK:
  1. Listen to the provided audio carefully.
  2. Transcribe EXACTLY what the student said into the "detectedText" field. If they only said one word, only put that one word. DO NOT just copy the target sentence.
  3. Compare the audio to the target sentence.
  4. Calculate a "score" (0-100) based on:
     - Completeness: Did they read the whole sentence? (Significant penalty if words are missing).
     - Accuracy: Are the spoken words pronounced correctly?
     - Rhythm: Is the flow natural?

  Guidelines for JSON response:
  - detectedText: MUST be the literal transcription of the audio.
  - score: 0-100. If only a small part of the sentence is read, the score should be low (e.g., < 40).
  - accuracy: 'try-again' (0-49), 'getting-there' (50-74), 'great' (75-89), 'superstar' (90-100).
  - tips: Encouraging coaching in Korean (한국어). If they only read a part, kindly suggest reading the full sentence next time.
  - mispronouncedSounds: Specific English sounds or words that were unclear in the audio.

  IMPORTANT: Do not hallucinate. If you only hear "buttons", detectedText must be "buttons".`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'audio/webm',
            data: audioBase64,
          },
        },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          accuracy: { type: Type.STRING, enum: ['try-again', 'getting-there', 'great', 'superstar'] },
          mispronouncedSounds: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
          },
          tips: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
          },
          detectedText: { type: Type.STRING }
        },
        required: ['score', 'accuracy', 'mispronouncedSounds', 'tips', 'detectedText']
      }
    }
  });

  try {
    const result = JSON.parse(response.text || '{}');
    return result as PronunciationFeedback;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("죄송해요, 소리를 제대로 분석하지 못했어요. 다시 한 번 녹음해 주시겠어요?");
  }
};

export const generateSpeech = async (text: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Read this story sentence with groovy expression and rhythm: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64Audio) return;

  const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const audioBuffer = await decodeAudioData(
    decode(base64Audio),
    outputAudioContext,
    24000,
    1,
  );
  
  const source = outputAudioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(outputAudioContext.destination);
  source.start();
};
