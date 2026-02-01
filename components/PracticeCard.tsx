
import React, { useState, useRef, useEffect } from 'react';
import { Play, Mic, Square, Loader2, Volume2, AlertCircle, Sparkles, BookOpen, RotateCcw, X } from 'lucide-react';
import { StorySegment, PronunciationFeedback } from '../types';
import { generateSpeech, blobToBase64, getPronunciationFeedback } from '../services/geminiService';
import PhonicsGuide from './PhonicsGuide';

type PracticeStatus = 'idle' | 'playing' | 'recording' | 'evaluating';

interface PracticeCardProps {
  segment: StorySegment;
  onFeedback: (feedback: PronunciationFeedback) => void;
  onRetry?: () => void;
  hasFeedback?: boolean;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ segment, onFeedback, onRetry, hasFeedback }) => {
  const [status, setStatus] = useState<PracticeStatus>('idle');
  const [showPhonics, setShowPhonics] = useState(false);
  const [error, setError] = useState<{ message: string; type: 'perm' | 'tech' | 'api' } | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleListen = async () => {
    setError(null);
    setStatus('playing');
    try {
      await generateSpeech(segment.text);
    } catch (err) {
      console.error(err);
      setError({ 
        message: "스피커나 인터넷 연결에 문제가 있는 것 같아요. 다시 한 번 확인해 주시겠어요?", 
        type: 'tech' 
      });
    } finally {
      setStatus('idle');
    }
  };

  const startRecording = async () => {
    setError(null);
    audioChunksRef.current = [];
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }

        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (audioBlob.size > 0) {
          await handleEvaluate(audioBlob);
        } else {
          setStatus('idle');
          setError({ 
            message: "아무 소리도 들리지 않았어요! 마이크가 잘 작동하는지 확인하고 조금 더 크게 말씀해 주세요.", 
            type: 'tech' 
          });
        }
      };

      mediaRecorder.start();
      setStatus('recording');
    } catch (err: any) {
      setStatus('idle');
      console.error("Microphone access error:", err);
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError({ 
          message: '마이크 사용 권한이 거부되었어요! 브라우저 주소창 왼쪽의 자물쇠 아이콘을 눌러 마이크 권한을 허용해 주세요.', 
          type: 'perm' 
        });
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setError({ 
          message: '마이크를 찾을 수 없어요. 마이크가 제대로 연결되어 있는지 확인해 주세요.', 
          type: 'tech' 
        });
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        setError({ 
          message: '다른 프로그램에서 마이크를 이미 사용 중인 것 같아요. 다른 앱을 닫고 다시 시도해 주세요.', 
          type: 'tech' 
        });
      } else {
        setError({ 
          message: '마이크를 켜는 중에 알 수 없는 문제가 발생했어요. 브라우저를 다시 시작해 보시겠어요?', 
          type: 'tech' 
        });
      }
    }
  };

  const stopRecording = () => {
    if (status !== 'recording') return;
    setStatus('evaluating');

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        console.error("Stop failed", e);
        setStatus('idle');
        setError({ message: '녹음을 멈추는 중에 문제가 발생했어요. 다시 시도해 주세요.', type: 'tech' });
      }
    }
  };

  const handleEvaluate = async (blob: Blob) => {
    try {
      const base64 = await blobToBase64(blob);
      const feedback = await getPronunciationFeedback(base64, segment.text);
      onFeedback(feedback);
      setStatus('idle');
    } catch (err: any) {
      setError({ 
        message: err.message || '인공지능 비서가 답변을 준비하는 중에 문제가 생겼어요. 다시 한 번 녹음해 주시겠어요?', 
        type: 'api' 
      });
      setStatus('idle');
    }
  };

  const handleRetryClick = () => {
    setError(null);
    if (onRetry) onRetry();
  };

  const isLoading = status === 'evaluating';
  const isRecording = status === 'recording';
  const isPlaying = status === 'playing';

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 max-w-3xl w-full border-[10px] border-yellow-400 transition-all relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-4 bg-blue-500"></div>
      
      <div className="text-8xl mb-10 transform hover:scale-110 transition-transform duration-500 select-none">
        {segment.illustration}
      </div>

      <div className="w-full text-center relative z-10 mb-8 px-4">
        <div className="inline-block px-5 py-2 rounded-2xl bg-indigo-100 text-indigo-600 text-xs font-black mb-6 tracking-widest uppercase shadow-sm">
          {segment.context}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] mb-8">
          {segment.text}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleListen}
            disabled={status !== 'idle'}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-3xl bg-blue-500 text-white font-black text-lg md:text-xl shadow-xl shadow-blue-100 hover:bg-blue-600 active:scale-95 transition-all disabled:bg-slate-200 disabled:shadow-none"
          >
            {isPlaying ? <Loader2 className="w-6 h-6 animate-spin" /> : <Volume2 className="w-6 h-6" />}
            먼저 들어보세요
          </button>

          {segment.trickyWords && segment.trickyWords.length > 0 && (
            <button 
              onClick={() => setShowPhonics(!showPhonics)}
              disabled={status !== 'idle'}
              className={`inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-3xl font-black text-lg md:text-xl shadow-xl active:scale-95 transition-all disabled:opacity-50 ${
                showPhonics 
                  ? 'bg-yellow-400 text-white shadow-yellow-100' 
                  : 'bg-white text-yellow-500 border-4 border-yellow-400 shadow-slate-50 hover:bg-yellow-50'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              발음 꿀팁 {showPhonics ? '닫기' : '보기'}
            </button>
          )}

          {hasFeedback && (
            <button 
              onClick={handleRetryClick}
              disabled={status !== 'idle'}
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-3xl bg-white border-4 border-slate-200 text-slate-500 font-black text-lg md:text-xl shadow-xl hover:bg-slate-50 active:scale-95 transition-all disabled:opacity-50"
            >
              <RotateCcw className="w-6 h-6" />
              다시 도전하기
            </button>
          )}
        </div>

        {showPhonics && segment.trickyWords && (
          <PhonicsGuide words={segment.trickyWords} />
        )}
      </div>

      <div className="flex flex-col items-center gap-6 relative z-10 w-full border-t-4 border-slate-50 pt-10">
        <div className="relative">
          {isRecording && (
            <div className="absolute inset-0 -m-8 border-[12px] border-red-100 rounded-full animate-ping opacity-100"></div>
          )}
          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isLoading || isPlaying}
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center transition-all shadow-2xl relative z-20 ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 ring-8 ring-red-50' 
                : isLoading
                  ? 'bg-blue-100'
                  : 'bg-green-500 hover:bg-green-600 ring-8 ring-green-50'
            } text-white active:scale-90 disabled:cursor-not-allowed`}
          >
            {isLoading ? (
              <Loader2 className="w-12 h-12 md:w-16 md:h-16 animate-spin text-blue-500" />
            ) : isRecording ? (
              <>
                <Square className="w-12 h-12 md:w-16 md:h-16 fill-current mb-2" />
                <span className="font-black text-xs md:text-sm uppercase">멈춤</span>
              </>
            ) : (
              <>
                <Mic className="w-16 h-16 md:w-20 md:h-20 mb-2" />
                <span className="font-black text-xs md:text-sm uppercase tracking-wider">따라 읽기</span>
              </>
            )}
          </button>
        </div>
        <p className={`text-xl md:text-2xl font-black transition-colors ${isRecording ? 'text-red-500 animate-pulse' : isLoading ? 'text-blue-500' : 'text-slate-400'}`}>
          {isLoading 
            ? '발음을 분석 중이에요...' 
            : isRecording 
              ? '피트가 듣고 있어요!' 
              : '마이크를 눌러 따라 읽어보세요!'}
        </p>
      </div>

      {error && (
        <div className={`mt-8 p-6 ${error.type === 'perm' ? 'bg-orange-50 border-orange-200 text-orange-700' : 'bg-red-50 border-red-100 text-red-600'} border-4 rounded-[2rem] flex items-start gap-4 animate-in fade-in zoom-in duration-300 relative group`}>
          <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
          <div className="flex-grow">
            <h4 className="font-black text-lg md:text-xl mb-1">앗! 문제가 생겼어요</h4>
            <p className="font-bold text-base md:text-lg leading-snug">{error.message}</p>
          </div>
          <button 
            onClick={() => setError(null)}
            className="p-1 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PracticeCard;
