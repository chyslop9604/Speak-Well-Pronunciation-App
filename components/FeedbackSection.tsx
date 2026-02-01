
import React from 'react';
import { Star, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { PronunciationFeedback } from '../types';

interface FeedbackSectionProps {
  feedback: PronunciationFeedback;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ feedback }) => {
  const getScoreTheme = (accuracy: string) => {
    switch (accuracy) {
      case 'superstar': return { color: 'text-yellow-600 bg-yellow-50', border: 'border-yellow-200', label: '최고의 독서가! 🌟' };
      case 'great': return { color: 'text-green-600 bg-green-50', border: 'border-green-200', label: '참 잘했어요! 👍' };
      case 'getting-there': return { color: 'text-blue-600 bg-blue-50', border: 'border-blue-200', label: '조금만 더 힘내요! 🚀' };
      case 'try-again': return { color: 'text-orange-600 bg-orange-50', border: 'border-orange-200', label: '다시 한번 해봐요! 🎈' };
      default: return { color: 'text-slate-600 bg-slate-50', border: 'border-slate-200', label: '완료!' };
    }
  };

  const theme = getScoreTheme(feedback.accuracy);

  return (
    <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-xl border-4 border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-700 mt-10 mb-10">
      <div className={`p-10 text-center border-b-4 ${theme.color} ${theme.border}`}>
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-8 border-current mb-6 shadow-sm">
          <span className="text-4xl font-black">{feedback.score}</span>
        </div>
        <h3 className="text-4xl font-black tracking-tight mb-2 uppercase">{theme.label}</h3>
        <p className="text-slate-600 text-lg font-bold">정말 잘하고 있어요!</p>
      </div>

      <div className="p-10 space-y-10">
        <div className="bg-slate-50 rounded-[2rem] p-6 flex items-start gap-4 border-2 border-slate-100">
          <div className="p-2 bg-white rounded-xl shadow-sm">
             <Info className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">이렇게 들렸어요:</p>
            <p className="text-2xl font-bold text-slate-800 italic">"{feedback.detectedText}"</p>
          </div>
        </div>

        {feedback.mispronouncedSounds.length > 0 && (
          <div>
            <h4 className="flex items-center gap-3 text-slate-800 text-xl font-black mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              연습이 필요한 발음
            </h4>
            <div className="flex flex-wrap gap-3">
              {feedback.mispronouncedSounds.map((sound, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-yellow-100 text-yellow-800 border-2 border-yellow-200 rounded-2xl text-xl font-black">
                  {sound}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="flex items-center gap-3 text-slate-800 text-xl font-black mb-5">
             <div className="w-3 h-8 bg-blue-500 rounded-full"></div>
             재미있는 파닉스 팁
          </h4>
          <ul className="space-y-4">
            {feedback.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-700 group bg-slate-50 p-4 rounded-2xl border border-transparent hover:border-blue-100 transition-colors">
                <CheckCircle2 className="w-7 h-7 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg font-bold leading-snug">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
