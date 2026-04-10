import React from 'react';
import { TermInfo } from '@/data/mockNews';
import { BookOpen } from 'lucide-react';

export default function TermNote({ terms }: { terms: TermInfo[] }) {
  if (!terms || terms.length === 0) return null;

  return (
    <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-l-finance-accent shadow-sm mt-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen size={18} className="text-finance-accent" />
        <h3 className="font-bold text-finance-dark">기획자를 위한 쉬운 용어 노트</h3>
      </div>
      
      <div className="space-y-3">
        {terms.map((term, idx) => (
          <div key={idx} className="text-[0.95rem] text-slate-700">
            <span className="font-semibold text-finance-dark bg-yellow-100 px-1.5 py-0.5 rounded mr-2">
              {term.keyword}
            </span>
            <span className="leading-relaxed block mt-1 sm:inline sm:mt-0">
              {term.explanation}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
