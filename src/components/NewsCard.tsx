import React from 'react';
import { NewsItem } from '@/data/mockNews';
import { ExternalLink, Clock } from 'lucide-react';

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 text-finance-accent mb-4">
          <Clock size={16} />
          <span className="text-sm font-medium">최신 트렌드</span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold text-finance-dark mb-4 leading-tight">
          {news.title}
        </h2>
        
        <p className="text-slate-600 mb-6 leading-relaxed text-[1.05rem]">
          {news.summary}
        </p>
        
        <a 
          href={news.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-finance hover:text-finance-dark transition-colors"
        >
          기사 원문 보기 <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}
