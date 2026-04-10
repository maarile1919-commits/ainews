"use client";

import React, { useState } from 'react';
import { Brain, CheckCircle2, XCircle } from 'lucide-react';

interface QuizProps {
  quizData: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  };
}

export default function DailyQuiz({ quizData }: QuizProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = selectedIdx === quizData.correctAnswerIndex;

  const handleSubmit = () => {
    if (selectedIdx !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-finance-light text-finance rounded-lg">
          <Brain size={24} />
        </div>
        <h2 className="text-2xl font-bold text-finance-dark">데일리 AI 퀴즈</h2>
      </div>

      <div className="mb-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
        <p className="text-lg font-medium text-slate-800 leading-relaxed">
          Q. {quizData.question}
        </p>
      </div>

      <div className="grid gap-3 mb-8">
        {quizData.options.map((option, idx) => (
          <button
            key={idx}
            disabled={isSubmitted}
            onClick={() => setSelectedIdx(idx)}
            className={`
              w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-[1.05rem]
              ${isSubmitted 
                ? idx === quizData.correctAnswerIndex 
                  ? 'border-green-500 bg-green-50 text-green-900' 
                  : idx === selectedIdx 
                    ? 'border-red-300 bg-red-50 text-red-900 opacity-70'
                    : 'border-slate-200 bg-white opacity-50'
                : selectedIdx === idx
                  ? 'border-finance bg-finance-light/20 text-finance-dark'
                  : 'border-slate-200 hover:border-finance-light hover:bg-slate-50 text-slate-700'
              }
            `}
          >
            <span className="inline-block w-6 font-semibold opacity-70 mr-2">
              {idx + 1}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedIdx === null}
          className={`
            w-full py-4 rounded-xl font-bold text-lg transition-colors
            ${selectedIdx !== null 
              ? 'bg-finance text-white hover:bg-finance-dark shadow-md' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }
          `}
        >
          정답 확인하기
        </button>
      ) : (
        <div className={`p-5 rounded-xl flex gap-4 ${isCorrect ? 'bg-green-50 text-green-900 border border-green-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
          <div className="mt-0.5 flex-shrink-0">
            {isCorrect ? <CheckCircle2 className="text-green-600" size={24} /> : <XCircle className="text-red-500" size={24} />}
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">
              {isCorrect ? '정답입니다!' : '아쉽습니다, 오답입니다.'}
            </h4>
            <p className="leading-relaxed">
              {quizData.explanation}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
