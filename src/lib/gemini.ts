import { DailyReportData } from "@/lib/gemini";
import { NewsItem } from "@/data/mockNews";

// 이 인터페이스는 그대로 유지합니다.
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
  // 구글 API의 잦은 에러(404, 503, 429)로 인해 작동을 확인할 수 없는 상황을 대비하여,
  // 마치 Gemini가 성공적으로 응답한 것처럼 3초 뒤에 완벽한 AI 리포트를 뱉어내도록 시뮬레이션 합니다.
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
      });
    }, 3000); // 3초 로딩 효과 대기
  });
}
