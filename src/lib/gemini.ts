import { GoogleGenerativeAI } from "@google/generative-ai";
import { NewsItem } from "@/data/mockNews";

export interface DailyReportData {
  news: NewsItem[];
  quiz: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  };
}

export async function generateDailyAIReport(): Promise<DailyReportData> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Gemini API Key가 Vercel 환경변수(NEXT_PUBLIC_GEMINI_API_KEY)에 등록되지 않았습니다.");
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  // Gemini 1.5 Flash (최신 버전 명시)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  
  const prompt = `당신은 금융권(은행, 카드, 증권, 보험 등) IT/서비스 기획자를 과외해주는 최고의 AI 테크 애널리스트입니다.
오늘 기준으로 글로벌 환경에서 가장 파급력 있는 최신 인공지능(AI) 트렌드 및 빅테크 뉴스 3가지를 자체적으로 선별하여, 비전문가도 쉽게 이해할 수 있도록 리포트를 작성해주세요.
각 뉴스는 단순히 기술을 설명하는 것을 넘어 금융 비즈니스에 어떤 인사이트를 주는지 '금융 아이디어'를 도출해야 합니다.

[작성 규칙]
1. 반드시 아래 제시된 JSON 형식으로만 응답해야 합니다. 마크다운(\`\`\`json 등)이나 추가 설명 텍스트 없이 순수 JSON 문자열만 출력하세요.
2. 각 뉴스당 1~2개의 어려운 IT 전문 용어(terms)를 추출하여 비유를 섞어 쉽게 설명해주세요.
3. 퀴즈는 제공된 3가지 뉴스 내용을 바탕으로 출제합니다.

[결과물 JSON 형태]
{
  "news": [
    {
      "id": "임의의_고유_ID(예: news-1)",
      "title": "가독성 높고 트렌디한 뉴스 제목",
      "summary": "뉴스의 핵심 배경과 내용을 3~4문장으로 요약",
      "url": "해당 뉴스와 관련된 가용한 검색 URL 또는 공식 홈페이지 주소",
      "terms": [
        {
          "keyword": "본문에서 추출한 어려운 AI/IT 용어",
          "explanation": "금융권 직원이 이해하기 쉬운 비유적 설명"
        }
      ],
      "financeIdea": {
        "title": "금융 서비스 적용 시나리오 / 아이디어 제목",
        "reason": "해당 기술을 금융권 시스템이나 상품 기획에 도입했을 때 기대되는 구체적 효과와 이유"
      }
    }
  ],
  "quiz": {
    "question": "3가지 뉴스 중 하나의 핵심 내용을 묻는 4지선다형 퀴즈",
    "options": ["보기1", "보기2", "보기3", "보기4"],
    "correctAnswerIndex": 0,
    "explanation": "정답인 이유와 함께 해당 기술이 금융권에 주는 의미를 다시 한번 짚어주는 친절한 해설"
  }
}`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      }
    });

    const responseText = result.response.text();
    const data = JSON.parse(responseText.trim()) as DailyReportData;
    return data;
  } catch (error) {
    console.error("Gemini Report Generation Error:", error);
    throw new Error("리포트 생성 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
  }
}
