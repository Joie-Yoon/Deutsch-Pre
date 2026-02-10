
import React from 'react';
import { PracticeSheet } from '../types';

interface Props {
  sheet: PracticeSheet;
  index: number;
}

export const PracticeButton: React.FC<Props> = ({ sheet }) => {
  return (
    <a 
      href={sheet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 border border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/30 rounded-2xl transition-all duration-200 group active:scale-[0.99]"
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
      </div>
      <div className="text-left">
        <span className="text-xs font-bold text-emerald-600/70 uppercase block mb-0.5">Practice Material</span>
        <span className="text-lg font-bold block text-slate-800 group-hover:text-emerald-700 transition-colors">{sheet.title}</span>
      </div>
      <div className="ml-auto text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </a>
  );
};
