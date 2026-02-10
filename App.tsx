
import React from 'react';
import { Layout } from './components/Layout';
import { RecordingCard } from './components/RecordingCard';
import { PracticeButton } from './components/PracticeButton';
import { RECORDINGS, PRACTICE_SHEETS } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      <section id="recordings" className="mb-16">
        <div className="flex items-end justify-between mb-8 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              독일어 녹화본
            </h2>
            <p className="text-slate-500 mt-2 font-medium">실시간 강의 녹화 영상 및 수업 자료 확인</p>
          </div>
          <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {RECORDINGS.length} Lectures
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECORDINGS.map((rec) => (
            <RecordingCard key={rec.id} recording={rec} />
          ))}
        </div>
      </section>

      <section id="practice" className="mb-12">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-3xl font-extrabold text-slate-900">
            독일어 연습지
          </h2>
          <p className="text-slate-500 mt-2 font-medium">배운 내용을 복습하기 위한 설문 및 연습 링크</p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl">
          {PRACTICE_SHEETS.map((sheet, idx) => (
            <PracticeButton key={sheet.id} sheet={sheet} index={idx} />
          ))}
        </div>
      </section>

      <footer className="text-center py-12 border-t border-slate-100">
        <p className="text-slate-400 text-sm font-medium">
          &copy; 2024-2025 Deutsch Learning Hub. All rights reserved.
        </p>
        <p className="text-slate-300 text-xs mt-2 uppercase tracking-widest">
          Optimized for Learning
        </p>
      </footer>
    </Layout>
  );
};

export default App;
