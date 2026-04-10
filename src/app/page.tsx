import React from 'react';
import { mockNewsData, mockQuizData } from '@/data/mockNews';
import NewsCard from '@/components/NewsCard';
import TermNote from '@/components/TermNote';
import FinanceIdea from '@/components/FinanceIdea';
import DailyQuiz from '@/components/DailyQuiz';
import { Calendar } from 'lucide-react';

export default function Home() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Area */}
      <header className="bg-finance text-white pb-16 pt-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-finance-light/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar size={16} />
            {today} 발행
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Financial AI Briefing
          </h1>
          <p className="text-finance-light text-lg md:text-xl font-medium max-w-2xl">
            금융권 기획자를 위한 하루 5분 AI 비즈니스 과외
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-20">
        
        {/* News Section */}
        <div className="space-y-10">
          {mockNewsData.map((news) => (
            <div key={news.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
              {/* Left Column: News Card */}
              <div className="md:col-span-12 lg:col-span-7">
                <NewsCard news={news} />
              </div>
              
              {/* Right Column: AI Tutor Notes */}
              <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
                <TermNote terms={news.terms} />
                <FinanceIdea idea={news.financeIdea} />
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Section */}
        <DailyQuiz quizData={mockQuizData} />

      </div>
    </main>
  );
}
