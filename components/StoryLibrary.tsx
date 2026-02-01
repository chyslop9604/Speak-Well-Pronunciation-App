
import React from 'react';
import { STORIES } from '../constants';
import { Story } from '../types';
import { Book, ArrowRight } from 'lucide-react';

interface StoryLibraryProps {
  onSelectStory: (story: Story) => void;
}

const StoryLibrary: React.FC<StoryLibraryProps> = ({ onSelectStory }) => {
  return (
    <div className="w-full max-w-7xl px-4 py-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <Book className="text-white w-8 h-8" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-slate-800 tracking-tight">스토리 도서관</h2>
            <p className="text-slate-500 font-bold text-lg">총 {STORIES.length}개의 이야기 중 하나를 고르세요!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {STORIES.map((story) => (
          <button
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="group relative bg-white border-4 border-slate-100 rounded-[2.5rem] p-6 text-left transition-all hover:border-blue-500 hover:shadow-xl active:scale-[0.98] flex flex-col h-full"
          >
            <div className="text-5xl bg-slate-50 rounded-2xl p-4 w-fit mb-4 group-hover:bg-blue-50 transition-colors">
              {story.coverEmoji}
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                {story.title}
              </h3>
              <p className="text-slate-500 text-sm font-bold leading-relaxed mb-4 line-clamp-2">
                {story.description}
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-widest">
                {story.segments.length} Pages
              </span>
              <div className="text-blue-500 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-white rounded-[3rem] border-8 border-dashed border-slate-100 text-center">
        <p className="text-2xl font-black text-slate-400 italic">"Keep walking along and singing your song!"</p>
        <p className="text-slate-400 font-bold mt-2">피트와 친구들이 당신의 도전을 응원해요.</p>
      </div>
    </div>
  );
};

export default StoryLibrary;
