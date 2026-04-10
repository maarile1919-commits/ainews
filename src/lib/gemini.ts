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

// 구글 에러(429, 503 등) 시 표시될 완벽한 구조의 대체(Mock) 데이터입니다.
const FALLBACK_MOCK_DATA: DailyReportData = {
  news: [
    {
      id: "news-1",
      title: "애플, 새로운 온디바이스 AI 'Apple Intelligence' 전면 도입 예고",
      summary: "애플이 가을 업데이트를 통해 아이폰과 아이패드에 자체 개발한 생성형 AI 시스템을 탑재합니다. 데이터 서버를 거치지 않고 기기 내부에서 작동하는 '온디바이스' 방식을 채택하여 개인정보 유출 우려를 원천 차단했습니다. 이는 글로벌 스마트폰 시장에서 AI 대중화를 이끌 기폭제가 될 전망입니다.",
      url: "https://www.apple.com/kr/apple-intelligence/",
      terms: [
        {
          keyword: "온디바이스 AI",
          explanation: "클라우드(서버)에 데이터를 보내지 않고, 내 핸드폰 기기 안에서 스스로 생각하고 답을 내놓는 오프라인 인공지능입니다. (보안성 극대화)"
        }
      ],
      financeIdea: {
        title: "네트워크 단절 환경에서도 작동하는 오프라인 AI 금융비서 탑재",
        reason: "망 분리 규제가 심한 금융권이나, 해외 로밍 및 비행기 모드에서도 고객이 안전하게 자신의 계좌 내역을 분석하고 환율을 계산할 수 있는 보안 철저형 자산관리 AI 서비스를 기획할 수 있습니다."
      }
    },
    {
      id: "news-2",
      title: "오픈AI, 음성으로 실시간 대화하는 GPT-4o 출시",
      summary: "오픈AI가 텍스트, 화면, 음성을 동시에 인식하고 처리하는 '옴니모델(Omni)' GPT-4o를 전격 공개했습니다. 사람이 말하는 중간에 끼어들거나, 목소리 톤(감정)까지 파악하여 반응하는 등 기존 챗봇의 한계를 뛰어넘어 진짜 사람과 영상 통화하는 수준의 상호작용을 보여주었습니다.",
      url: "https://openai.com/index/hello-gpt-4o/",
      terms: [
        {
          keyword: "옴니모델 (Omni-model)",
          explanation: "텍스트면 텍스트, 소리면 소리 하나만 처리하던 과거와 달리, 눈(시각)과 귀(청각)와 입(음성)을 모두 한 번에 종합적으로 처리하는 만능 AI 엔진입니다."
        }
      ],
      financeIdea: {
        title: "고객 감정 감지형 실시간 보이스 AI 콜센터(AICC) 고도화",
        reason: "고객이 전화로 화를 내거나 당황한 목소리를 내면 AI가 이를 즉시 감지하여 부드러운 톤으로 상담 응대를 변경하거나, 악성 민원을 사전에 방지하는 초개인화된 감성 AI 텔러를 도입할 수 있습니다."
      }
    },
    {
      id: "news-3",
      title: "엔비디아 블랙웰 아키텍처 공개, AI 훈련 비용 1/25로 축소",
      summary: "AI 반도체의 독점 기업 엔비디아가 새로운 GPU '블랙웰(Blackwell)'을 발표했습니다. 기존 대비 연산 속도는 수십 배 빨라지고 전력 소모와 비용은 극단적으로 줄어들었습니다. 이에 따라 자금력이 부족했던 기업들도 엄청난 규모의 거대 AI 모델을 구축할 수 있는 진입 장벽이 무너졌습니다.",
      url: "https://www.nvidia.com/ko-kr/data-center/technologies/blackwell-architecture/",
      terms: [
        {
          keyword: "아키텍처 (Architecture)",
          explanation: "반도체 컴퓨터의 구조와 설계 방식을 말합니다. 마치 건물을 지을 때 더 효율적이고 공간을 넓게 빼는 '최신 설계 도면'과 같습니다."
        }
      ],
      financeIdea: {
        title: "사내 구축형(On-Premise) 금융 특화 초거대 언어모델(sLLM) 자체 개발",
        reason: "값비싼 하드웨어 비용 때문에 AI 도입을 망설였던 금융사들이, 저비용 고효율 인프라를 바탕으로 카드 결제 데이터나 대출 심사 로직만 전문으로 학습한 '우리 은행만의 독자적인 AI 모델'을 저렴하게 구축할 수 있게 됩니다."
      }
    }
  ],
  quiz: {
    question: "서버나 클라우드에 연결되지 않아도, 내 스마트폰 기기 자체에서 구동되어 해킹이나 개인정보 유출 걱정이 없는 AI 기술을 무엇이라고 할까요?",
    options: ["클라우드 AI", "온프레미스 AI", "온디바이스 AI", "옴니모델 AI"],
    correctAnswerIndex: 2,
    explanation: "정답입니다! '온디바이스 AI'는 기기 내부에서 모든 연산이 처리되므로 보안이 생명인 금융 앱에 접목하기 가장 완벽하고 안전한 최신 AI 트렌드입니다."
  }
};

export async function generateDailyAIReport(): Promise<DailyReportData> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  // API Key가 없거나, Vercel 환경이 아닌 로컬 등에서는 즉시 시뮬레이션 데이터를 반환합니다.
  if (!apiKey) {
    console.warn("API 키가 구동되지 않아 Mock 데이터를 반환합니다.");
    return new Promise((resolve) => setTimeout(() => resolve(FALLBACK_MOCK_DATA), 2000));
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
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
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
      throw new Error(`구글 API 통신 에러: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.candidates || result.candidates.length === 0) {
      throw new Error("결과를 생성하지 못했습니다.");
    }

    const responseText = result.candidates[0].content.parts[0].text;
    const cleanText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanText) as DailyReportData;
    
    return data;
  } catch (error: any) {
    // 💡 우아한 대체(Graceful Degradation) 기능 작동!
    // 429(할당량 초과), 503(서버 터짐), 파싱 에러 등이 발생하면, 서비스가 멈추는 대신 이전에 준비된 Mock Data를 반환합니다.
    console.warn("실시간 구글 AI 호출 실패. (이유:", error.message, ") => 비상용 시뮬레이션 데이터를 화면에 출력합니다.");
    return FALLBACK_MOCK_DATA;
  }
}
