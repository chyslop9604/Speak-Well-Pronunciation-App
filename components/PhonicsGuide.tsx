
import React, { useState } from 'react';
import { Volume2, Loader2, Info } from 'lucide-react';
import { TrickyWord } from '../types';
import { generateSpeech } from '../services/geminiService';

interface PhonicsGuideProps {
  words: TrickyWord[];
}

const PhonicsGuide: React.FC<PhonicsGuideProps> = ({ words }) => {
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const handlePlayWord = async (word: string) => {
    setPlayingWord(word);
    try {
      await generateSpeech(word);
    } catch (err) {
      console.error(err);
    } finally {
      setPlayingWord(null);
    }
  };

  return (
    <div className="w-full mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-6 bg-yellow-400 rounded-full"></div>
        <h4 className="text-xl font-black text-slate-800">어려운 단어 연습하기</h4>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {words.map((tw, idx) => (
          <div 
            key={idx} 
            className="bg-slate-50 border-4 border-slate-100 rounded-2xl p-4 flex flex-col gap-3 hover:border-yellow-200 transition-all group"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-blue-600 tracking-tight">{tw.word}</span>
              <button 
                onClick={() => handlePlayWord(tw.word)}
                disabled={playingWord !== null}
                className="p-2 rounded-xl bg-white shadow-sm border-2 border-slate-100 text-blue-500 hover:text-blue-600 hover:border-blue-100 active:scale-90 transition-all disabled:opacity-50"
              >
                {playingWord === tw.word ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="flex items-start gap-2 bg-white/50 p-3 rounded-xl">
              <Info className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
              <p className="text-sm font-bold text-slate-600 leading-snug">{tw.guide}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhonicsGuide;
