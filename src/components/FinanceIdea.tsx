import React from 'react';
import { FinanceIdea as IFinanceIdea } from '@/data/mockNews';
import { Lightbulb } from 'lucide-react';

export default function FinanceIdea({ idea }: { idea: IFinanceIdea }) {
  if (!idea) return null;

  return (
    <div className="bg-finance-light/30 rounded-xl p-5 border border-finance-light mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb size={20} className="text-finance" fill="currentColor" />
        <h3 className="font-bold text-finance sm:text-lg">금융 비즈니스 아이디어 뱅크</h3>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-finance-dark text-[1.05rem] mb-2">
          {idea.title}
        </h4>
        <p className="text-slate-700 text-[0.95rem] leading-relaxed">
          {idea.reason}
        </p>
      </div>
    </div>
  );
}
