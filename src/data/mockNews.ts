export interface TermInfo {
  keyword: string;
  explanation: string;
}

export interface FinanceIdea {
  title: string;
  reason: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  terms: TermInfo[];
  financeIdea: FinanceIdea;
}

export const mockNewsData: NewsItem[] = [
  {
    id: "news-1",
    title: "빅테크 간 차세대 AI 및 클라우드 인프라 동맹 구축",
    summary: "글로벌 빅테크 기업들이 차세대 AI 인프라 발전과 클라우드 컴퓨팅 최적화를 위해 다년간의 전략적 협력을 발표했습니다. 이는 점차 거대해지는 오픈소스 AI 모델과 엔터프라이즈 환경에서의 AI 도입을 가속화하기 위한 하드웨어-소프트웨어 통합 생태계 구축의 일환으로 풀이됩니다. 향후 다양한 산업에서 AI 모델의 구동 효율이 크게 개선될 전망입니다.",
    url: "https://example.com/ai-cloud-news",
    terms: [
      {
        keyword: "오픈소스 AI 모델",
        explanation: "기업들이 무료로 소스코드를 공개하여 누구나 수정하고 배포할 수 있는 AI입니다. 자체 기술력이 부족한 기업도 오픈소스 기반으로 맞춤형 AI를 쉽게 만들 수 있습니다."
      },
      {
        keyword: "엔터프라이즈 환경",
        explanation: "개인이 아닌 기업이나 기관에서 대규모 업무 처리를 위해 사용하는 IT 비즈니스 환경을 말합니다."
      }
    ],
    financeIdea: {
      title: "프라이빗 클라우드 기반 은행 자체 특화 AI 플랫폼 구축",
      reason: "금융권은 망분리와 고객 개인정보 보호 규제로 인해 퍼블릭(공용) 클라우드를 활용한 AI 도입이 제한적입니다. 빅테크들의 인프라 기술 최적화 트렌드를 반영해, 향후 은행 내부망(프라이빗 클라우드)에서도 보안을 유지하며 가볍고 효과적으로 동작하는 sLLM(소형언어모델) 기반 고객 상담 AI 시스템을 구축하는 밑그림을 그릴 수 있습니다."
    }
  },
  {
    id: "news-2",
    title: "산업 현장에 스며드는 '피지컬 AI'와 로보틱스의 융합",
    summary: "AI가 단순히 가상의 공간에서 글이나 그림을 생성하는 것을 넘어, 로봇에 탑재되어 물리적인 세상을 인지하고 스스로 행동하는 '피지컬 AI(Physical AI)'가 핵심 생존 전략으로 부상하고 있습니다. 주요 제조사들이 AI 휴머노이드 로봇 연구에 박차를 가하며, 스마트 팩토리를 비롯한 실물 결합형 AI 시장 선점에 나서고 있습니다.",
    url: "https://example.com/physical-ai-news",
    terms: [
      {
        keyword: "피지컬 AI (Physical AI)",
        explanation: "디지털 세계에서만 작동하는 AI(예: 챗봇)와 달리, 로봇, 자율주행차, 드론 등의 물리적(Physical) 형태를 가지고 현실 세계의 사물과 직접 상호작용하는 인공지능입니다."
      },
      {
        keyword: "스마트 팩토리",
        explanation: "설계, 개발, 제조 및 유통 등 생산 과정에 디지털 자동화 솔루션이 결합된 지능형 생산공장입니다."
      }
    ],
    financeIdea: {
      title: "무인 점포(스마트 브랜치) 내 1:1 맞춤형 AI 로봇 텔러 도입 검토",
      reason: "현재 은행의 무인 점포는 주로 화상 상담 기기나 고도화된 ATM에 머물러 있습니다. 향후 '피지컬 AI'가 상용화되면, 시각/청각 인식 기술을 바탕으로 고령 고객의 표정과 당황하는 몸짓을 감지해 선제적으로 다가가 음성으로 앱 사용법을 안내하거나 금융사고(보이스피싱 등)를 감지하는 지능형 로봇 텔러 기획이 가능해집니다."
    }
  },
  {
    id: "news-3",
    title: "AI 기반 '개인 건강 코치' 웨어러블 서비스 글로벌 확대",
    summary: "사용자의 수면, 운동, 스트레스 등 웰니스 데이터를 AI가 분석하여 개인 맞춤형 피드백과 코칭을 제공하는 헬스케어 서비스가 전 세계 수십 개국으로 확대 적용됩니다. 초개인화된 데이터를 통해 기존의 단순 수치 제공을 넘어, 맥락에 맞는 생활 습관 개선 조언을 생성형 AI가 대화형으로 제공하는 것이 특징입니다.",
    url: "https://example.com/ai-healthcare-news",
    terms: [
      {
        keyword: "웨어러블 (Wearable)",
        explanation: "스마트워치, 스마트 반지 등 사용자가 몸에 착용하고 다니며 건강 상태나 활동량을 측정할 수 있는 IT 기기입니다."
      },
      {
        keyword: "초개인화 (Hyper-personalization)",
        explanation: "사용자의 실시간 데이터와 성향, 맥락까지 분석하여 개개인에게 가장 딱 맞는 혜택과 콘텐츠를 제공하는 마케팅/서비스 기법입니다."
      }
    ],
    financeIdea: {
      title: "라이프케어 데이터 결합 기반의 초개인화 보험 상품(Usage-Based Insurance) 런칭",
      reason: "보험사 등은 헬스케어 디바이스의 AI 코치가 분석한 건강 개선 지표를 금융 데이터와 결합할 수 있습니다. 예를 들어, 사용자가 AI 건강 코치의 조언을 지켜 목표 달성 시, 보험료를 실시간 할인해주거나 리워드 포인트를 적립해주는 등의 능동형 헬스케어-금융 연계 상품(UBI) 파트너십을 선제적으로 기획할 수 있습니다."
    }
  }
];

export const mockQuizData = {
  question: "기존 디지털 세계(챗봇 등)에서만 작동하는 AI와 달리, 로봇 등 물리적 형태를 가지고 현실 세계의 사물과 직접 상호작용하는 인공지능을 무엇이라 부를까요?",
  options: [
    "초개인화 AI (Hyper-personalization AI)",
    "피지컬 AI (Physical AI)",
    "오픈소스 AI (Open-source AI)",
    "클라우드 AI (Cloud AI)"
  ],
  correctAnswerIndex: 1,
  explanation: "정답입니다! '피지컬 AI'는 향후 무인 은행 점포나 지능형 로봇 텔러 등 실제 금융 오프라인 현장에 큰 변화를 가져올 핵심 기술입니다."
};
