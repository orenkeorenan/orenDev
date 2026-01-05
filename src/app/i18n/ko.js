export const ko = {
  brand: {
    logo: '오 .Dev',
  },

  actions: {
    hireMe: '지원하기',
    submit: '제출',
    cancel: '취소',
    sending: '전송 중…',
    close: '닫힘',
  },


  hero: {
    titleIntro: '프로덕션 환경에서 사용되는 웹 애플리케이션을 구축하는 풀스택 개발자입니다.',
    subTitleIntro: '현대적인 JavaScript 프레임워크와 백엔드 시스템을 기반으로, 확장 가능하고 장기적으로 유지보수가 가능한 시스템 설계와 클린 코드에 집중합니다.',
    image: '/hero-ko.png',
  },

  folders: {
    portfolio: '포트폴리오',
    skills: '기술',
    about: '소개',
    career: '경력',
    contact: '연락처',
  },

  projects: {
    summary: `React와 Node.js를 기반으로 실제 사용성을 중심에 두고,
            깔끔한 아키텍처와 장기적인 유지보수성을 고려하여 구축되었습니다.`,

    manna: {
      title: 'Manna',
      subtitle:
        '사람들이 부담 없이 소규모 모임을 만들고 참여할 수 있도록 돕는 가벼운 소셜 플랫폼입니다. 새로운 사람을 만나는 일은 복잡할 필요가 없습니다.',
    },
  },

  skills: {
    title: '기술 스택',
    summary:
      'React와 Node.js를 기반으로 프론트엔드부터 백엔드, 배포까지 전체 흐름을 직접 구현하며 웹 애플리케이션을 개발합니다.',
    groups: {
      frontend: {
        title: '프론트엔드',
        items: ['React', 'HTML', 'CSS', 'JavaScript'],
      },
      backend: {
        title: '백엔드',
        items: ['Node.js', 'REST API'],
      },
      database: {
        title: '데이터베이스',
        items: ['MySQL (개인 백엔드)'],
      },
      deployment: {
        title: '배포 및 인프라',
        items: ['GitHub', 'Vercel', 'Railway'],
      },
    },
  },

  about: {
    p1:
      '실제 문제를 코드로 해결하는 데 집중하는 독학 개발자입니다. 단순한 화면 구현보다, 사용자가 서비스를 어떻게 경험하는지 — 흐름과 구조, 그리고 선택의 과정 — 를 중요하게 생각합니다.',
    p2:
      '혼자 계획하고 빠르게 실행하는 방식에 강점이 있으며, 필요할 때는 협업도 주저하지 않습니다. 코드를 작성할 수 있는 사람이 결국 결정을 내릴 수 있다고 믿으며, 실제 프로젝트를 통해 계속해서 더 나은 코드를 배우고 있습니다.',
  },

  career: {
    title: '경력',
    timeline: [
      {
        year: '2025 – 현재',
        role: '자기주도 개발',
        description:
          'React, Node.js, MySQL을 활용한 실제 웹 애플리케이션 개발에 집중하고 있으며, IT 분야의 주니어 또는 엔트리 포지션을 적극적으로 찾고 있습니다.',
      },
      {
        year: '2024 – 2025',
        role: '개인 프로젝트 기반 경험',
        description:
          'Oppapost와 Kajago를 풀스택 애플리케이션으로 설계 및 개발하며, 기획부터 구현, 개선까지 전 과정을 혼자 수행했습니다.',
      },
      {
        year: '2023 – 2024',
        role: '학습 및 탐색',
        description:
          '독학으로 웹 개발을 시작하여, 실험과 시행착오를 통해 기초부터 점진적으로 프로젝트를 구축해 왔습니다.',
      },
    ],
  },
  
  contact: {
    title: '연락처',
    description:
      '정규직, 계약직, 주니어 포지션 등 다양한 기회에 열려 있습니다. 제 역량이 팀이나 프로젝트에 적합하다고 느끼신다면 언제든지 연락 주세요.',
    emailLabel: '이메일',
    githubLabel: '깃허브',
    linkedinLabel: '링크드인',
  },

 

  hireModal: {
    title: '함께 일해요',
    subtitle: '채용 또는 프로젝트 정보를 남겨주세요.',

    intent: {
      fulltime: {
        title: '정규직',
        desc: '장기 또는 정규 포지션',
      },
      freelance: {
        title: '프리랜서 / 계약',
        desc: '단기 또는 프로젝트 기반',
      },
    },
    fulltime: {
      companyName: '회사명',
      companyNamePlaceholder: 'e.g. Kakao',
      roleTitle: '직무명',
      roleTitlePlaceholder: '프론트엔드 엔지니어',
      workType: '근무 형태',
      workTypePlaceholder: '원격 / 하이브리드 / 출근',
      location: '근무지',
      locationPlaceholder: '도시, 국가',
      interviewDate: '면접 일시',
      email: '이메일',
      emailPlaceholder: '예: yourname@example.com',
      phoneNumber: '전화번호',
      phoneNumberPlaceholder: '예: 010-1234-5678',
    },
    
    freelance: {
      companyClientName: "회사 / 클라이언트 이름",
      companyClientNamePlaceholder: "예: 삼성전자, 홍길동",
      projectType: "프로젝트 유형",
      projectTypePlaceholder: "예: 웹사이트, 모바일 앱, 마케팅 캠페인",
      scopeProjection: "작업 범위",
      scopeProjectionPlaceholder: "무엇을 만들고 있는지 설명해주세요",
      timeline: "일정",
      timelinePlaceholder: "예: 4주, 2개월, 유동적",
      budgetRange: "예산 범위",
      budgetRangePlaceholder: "예: 50만~200만 원, 협의 가능",
      dateAndTime: "소개 통화 날짜 & 시간",
      timezone: "시간대",
      timezonePlaceholder: "시간대를 선택하세요",
      email: "이메일",
      emailPlaceholder: "예: yourname@example.com",
    }


  },
  actions: {
        hireMe: '지원하기',
        submit: '제출',
        cancel: '취소',
        sending: '전송 중…',
  },
}
