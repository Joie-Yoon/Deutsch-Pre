
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-100">
              <span className="text-xl font-bold">DE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Deutsch 2026</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Learning Hub</p>
            </div>
          </div>
          <nav className="flex gap-4">
            <a href="#recordings" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">녹화본</a>
            <a href="#practice" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">연습지</a>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        {children}
      </main>
    </div>
  );
};
