
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, BookOpen, Star, Sparkles, LayoutGrid } from 'lucide-react';
import { STORIES } from './constants';
import { Story, StorySegment, PronunciationFeedback, PracticeHistory } from './types';
import PracticeCard from './components/PracticeCard';
import FeedbackSection from './components/FeedbackSection';
import StatsDashboard from './components/StatsDashboard';
import StoryLibrary from './components/StoryLibrary';

const App: React.FC = () => {
  const [currentStoryId, setCurrentStoryId] = useState<string>(() => {
    return localStorage.getItem('last_story_id') || STORIES[0].id;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
  const [history, setHistory] = useState<PracticeHistory[]>([]);
  const [view, setView] = useState<'practice' | 'stats' | 'library'>('practice');

  useEffect(() => {
    const saved = localStorage.getItem('pronunciation_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  const handleSelectStory = (story: Story) => {
    setCurrentStoryId(story.id);
    setCurrentIndex(0);
    setFeedback(null);
    setView('practice');
    localStorage.setItem('last_story_id', story.id);
  };

  const handleFeedback = (newFeedback: PronunciationFeedback) => {
    setFeedback(newFeedback);
    const story = STORIES.find(s => s.id === currentStoryId) || STORIES[0];
    const segment = story.segments[currentIndex];
    const attempt: PracticeHistory = {
      wordId: segment.id,
      text: segment.text,
      score: newFeedback.score,
      timestamp: Date.now(),
      storyId: currentStoryId,
    };
    
    const newHistory = [...history, attempt];
    setHistory(newHistory);
    localStorage.setItem('pronunciation_history', JSON.stringify(newHistory));
  };

  const currentStory = STORIES.find(s => s.id === currentStoryId) || STORIES[0];

  const nextWord = () => {
    if (currentIndex < currentStory.segments.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFeedback(null);
    }
  };

  const prevWord = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFeedback(null);
    }
  };

  const currentSegment = currentStory.segments[currentIndex];

  return (
    <div className="min-h-screen bg-[#FFFDF0] flex flex-col font-sans selection:bg-yellow-200">
      <header className="bg-white border-b-8 border-yellow-400 sticky top-0 z-50 py-3">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('library')}>
            <div className="w-14 h-14 bg-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
              <Star className="text-white w-8 h-8 fill-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-blue-600 leading-none tracking-tighter uppercase">
                  Speak Well
                </span>
                <span className="hidden sm:inline text-xs font-black text-blue-400 uppercase tracking-tighter">
                  by Power English
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-yellow-500 uppercase tracking-[0.2em] mt-1">
                  스피크 웰
                </span>
              </div>
            </div>
          </div>

          <nav className="flex bg-slate-100 p-1.5 md:p-2 rounded-[2rem] shadow-inner">
            <button 
              onClick={() => setView('library')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-[1.5rem] text-sm md:text-base font-black transition-all ${
                view === 'library' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden xs:inline">도서관</span>
            </button>
            <button 
              onClick={() => setView('practice')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-[1.5rem] text-sm md:text-base font-black transition-all ${
                view === 'practice' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden xs:inline">연습하기</span>
            </button>
            <button 
              onClick={() => setView('stats')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-[1.5rem] text-sm md:text-base font-black transition-all ${
                view === 'stats' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden xs:inline">현황</span>
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <div className="bg-slate-50 px-5 py-3 rounded-2xl border-2 border-slate-100">
               <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">현재 도서</span>
               <span className="text-lg font-black text-blue-600">{currentStory.title}</span>
             </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center px-4 py-12 md:py-20 overflow-y-auto">
        {view === 'library' ? (
          <StoryLibrary onSelectStory={handleSelectStory} />
        ) : view === 'practice' ? (
          <>
            <div className="w-full max-w-3xl flex justify-between items-center mb-12">
              <button 
                onClick={prevWord}
                disabled={currentIndex === 0}
                className="flex flex-col items-center gap-1 group disabled:opacity-30 transition-all active:scale-90"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg group-hover:bg-blue-50 transition-colors">
                   <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <span className="text-[10px] md:text-sm font-black text-blue-600 uppercase mt-2">이전 페이지</span>
              </button>
              
              <div className="flex flex-col items-center">
                <span className="text-sm md:text-lg font-black text-slate-400 uppercase tracking-[0.3em] mb-3">
                   {currentIndex + 1} / {currentStory.segments.length} 페이지
                </span>
                <div className="flex gap-2">
                  {currentStory.segments.map((_, i) => (
                    <div key={i} className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${i === currentIndex ? 'bg-blue-500 scale-150' : 'bg-slate-200'} transition-all`} />
                  ))}
                </div>
              </div>

              <button 
                onClick={nextWord}
                disabled={currentIndex === currentStory.segments.length - 1}
                className="flex flex-col items-center gap-1 group disabled:opacity-30 transition-all active:scale-90"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg group-hover:bg-blue-50 transition-colors">
                   <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <span className="text-[10px] md:text-sm font-black text-blue-600 uppercase mt-2">다음 페이지</span>
              </button>
            </div>

            <PracticeCard 
              segment={currentSegment} 
              onFeedback={handleFeedback} 
              onRetry={() => setFeedback(null)}
              hasFeedback={!!feedback}
              key={`${currentStoryId}-${currentSegment.id}`} 
            />

            {feedback && <FeedbackSection feedback={feedback} />}
            
            {!feedback && (
              <div className="mt-20 text-center max-w-xl bg-white p-8 md:p-12 rounded-[3rem] border-8 border-dashed border-blue-100 shadow-xl shadow-blue-50">
                <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-blue-400 mx-auto mb-6 animate-pulse" />
                <p className="text-2xl md:text-3xl font-black text-blue-600 leading-tight">
                  멋지게 읽어볼까요? 마이크를 누르고 신나는 모험을 시작하세요!
                </p>
              </div>
            )}
          </>
        ) : (
          <StatsDashboard history={history} />
        )}
      </main>

      <footer className="py-12 border-t-8 border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-slate-800">멈추지 말고, 계속 노래하세요! 다 괜찮아요! 🎸</p>
            <p className="text-slate-400 font-bold mt-1">한 페이지씩 리듬과 흐름을 연습해보세요.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2">
               <span className="text-lg font-black text-blue-600 uppercase tracking-widest">Speak Well</span>
               <span className="text-[10px] font-black text-blue-300 uppercase">by Power English</span>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Powered by Gemini</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
