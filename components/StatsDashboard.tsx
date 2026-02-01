
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PracticeHistory } from '../types';

interface StatsDashboardProps {
  history: PracticeHistory[];
}

const StatsDashboard: React.FC<StatsDashboardProps> = ({ history }) => {
  const chartData = history.map((item, idx) => ({
    name: idx + 1,
    score: item.score,
    word: item.text
  })).slice(-10);

  if (history.length === 0) return null;

  const averageScore = Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length);

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mt-12 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">나의 학습 현황</h3>
          <p className="text-slate-500 text-sm">최근 {chartData.length}번의 시도를 확인해보세요</p>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">평균 점수</p>
            <p className="text-3xl font-black text-indigo-600">{averageScore}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">연습한 문장 수</p>
            <p className="text-3xl font-black text-slate-800">{history.length}</p>
          </div>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              labelStyle={{ display: 'none' }}
              formatter={(value: number, name: string, props: any) => [`점수: ${value}`, `문장: ${props.payload.word}`]}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#4f46e5" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsDashboard;
