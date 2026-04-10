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
  
  const prompt = `당신은 금융권(은행, 카드, 증권, 보험 등) IT/서비스 기획자를 과외해주는 최고의 AI 테크 애널리스트입니다.
오늘 기준으로 글로벌 환경에서 가장 파급력 있는 최신 인공지능(AI) 트렌드 및 빅테크 뉴스 3가지를 자체적으로 선별하여, 비전문가도 쉽게 이해할 수 있도록 리포트를 작성해주세요.
각 뉴스는 단순히 기술을 설명하는 것을 넘어 금융 비즈니스에 어떤 인사이트를 주는지 '금융 아이디어'를 도출해야 합니다.

[작성 규칙]
1. 반드시 아래 제시된 JSON 형식으로만 엄격하게 응답해야 합니다. 다른 서론이나 결론 텍스트는 절대 포함하지 마세요.
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
    // 라이브러리(SDK) 버전 충돌 및 v1beta 404 에러를 우회하기 위해 HTTP Fetch를 직접 사용합니다.
    // 안정성이 확인된 v1 엔드포인트와 최신 gemini-1.5-flash 모델을 명시합니다.
    const response = await fetch(\`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=\${apiKey}\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Error Response:", errorData);
      throw new Error(\`구글 API 통신 에러: \${response.status}\`);
    }

    const result = await response.json();
    
    if (!result.candidates || result.candidates.length === 0) {
      throw new Error("결과를 생성하지 못했습니다.");
    }

    const responseText = result.candidates[0].content.parts[0].text;
    
    // JSON 마크다운 마크업(\`\`\`json 등)이 섞여올 경우를 대비한 제거 처리
    const cleanText = responseText.replace(/\`\`\`json/gi, '').replace(/\`\`\`/g, '').trim();
    const data = JSON.parse(cleanText) as DailyReportData;
    
    return data;
  } catch (error: any) {
    console.error("Gemini Report Generation Error:", error);
    throw new Error(error.message || "리포트 생성 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
  }
}
