"use client";

import React, { useState } from 'react';
import NewsCard from '@/components/NewsCard';
import TermNote from '@/components/TermNote';
import FinanceIdea from '@/components/FinanceIdea';
import DailyQuiz from '@/components/DailyQuiz';
import { Calendar, RefreshCw, Cpu, BrainCircuit, Sparkles } from 'lucide-react';
import { generateDailyAIReport, DailyReportData } from '@/lib/gemini';

type AppState = 'idle' | 'loading' | 'success' | 'error';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [reportData, setReportData] = useState<DailyReportData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const handleGenerateReport = async () => {
    setAppState('loading');
    setErrorMessage("");
    try {
      const data = await generateDailyAIReport();
      setReportData(data);
      setAppState('success');
    } catch (err: any) {
      setErrorMessage(err.message || '알 수 없는 오류가 발생했습니다.');
      setAppState('error');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Area */}
      <header className="bg-finance text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-finance-light/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar size={16} />
            {today} 발행
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
            Financial AI Briefing
            <Sparkles className="text-yellow-400" size={32} />
          </h1>
          <p className="text-finance-light text-lg md:text-xl font-medium max-w-2xl">
            금융권 기획자를 위한 하루 5분 AI 비즈니스 과외
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-20 relative z-10">
        
        {/* State: Idle */}
        {appState === 'idle' && (
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-finance/10 rounded-full flex items-center justify-center mb-6">
              <BrainCircuit className="text-finance w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Gemini AI 애널리스트가 대기 중입니다</h2>
            <p className="text-slate-500 mb-8 max-w-md">
              매일 쏟아지는 글로벌 AI 기술 트렌드 중 금융 비즈니스에 가장 큰 파급력을 미칠 3가지 핵심 요약 리포트를 지금 바로 생성해보세요.
            </p>
            <button 
              onClick={handleGenerateReport}
              className="bg-finance hover:bg-finance-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-finance/30 transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95"
            >
              <Cpu size={24} />
              오늘의 금융 AI 리포트 생성
            </button>
          </div>
        )}

        {/* State: Loading */}
        {appState === 'loading' && (
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-finance/20 rounded-full animate-ping"></div>
              <div className="relative bg-finance text-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <RefreshCw size={40} className="animate-spin" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2 animate-pulse">Gemini가 금융 트렌드를 분석하고 있습니다...</h2>
            <p className="text-slate-500">최신 해외 아티클과 보고서를 기반으로 인사이트를 도출하는 중입니다. (약 10~15초 소요)</p>
            
            {/* Loading Progress Bar */}
            <div className="w-full max-w-md bg-slate-100 rounded-full h-2.5 mt-8 overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 bg-finance rounded-full animate-pulse w-full"></div>
            </div>
          </div>
        )}

        {/* State: Error */}
        {appState === 'error' && (
          <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500 text-3xl font-bold">!</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">리포트 생성 실패</h2>
            <p className="text-red-500 mb-8 max-w-md bg-red-50 p-4 rounded-xl text-sm">
              {errorMessage}
            </p>
            <p className="text-slate-500 mb-8 text-sm">Vercel 환경변수에 NEXT_PUBLIC_GEMINI_API_KEY가 올바르게 설정되었는지 확인해주세요.</p>
            <button 
              onClick={() => setAppState('idle')}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              다시 시도하기
            </button>
          </div>
        )}

        {/* State: Success */}
        {appState === 'success' && reportData && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* View controls */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setAppState('idle')}
                className="text-sm font-medium text-slate-500 hover:text-finance flex items-center gap-1 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"
               >
                <RefreshCw size={14} />
                새로운 리포트 생성
              </button>
            </div>

            {/* News Section */}
            <div className="space-y-10">
              {reportData.news.map((news) => (
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
            {reportData.quiz && (
              <DailyQuiz quizData={reportData.quiz} />
            )}
          </div>
        )}

      </div>
    </main>
  );
}
