// Language definitions with native names
export const languages = {
  en: { code: 'en', name: 'English', nativeName: 'English' },
  egy: { code: 'egy', name: 'Ancient Egyptian', nativeName: '𓂋𓏤𓈖𓎡𓅓𓏏𓊖' },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어' }
} as const;

export type LanguageCode = keyof typeof languages;

// Alphabetically sorted language codes for dropdowns
export const sortedLanguages = Object.values(languages).sort((a, b) => a.nativeName.localeCompare(b.nativeName));

export const translations = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name_suffix: "",
      tagline: "A dedicated software developer who loves building amazing things.",
      cta: "Get in touch"
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      jobs: [
        {
          title: "Lead Full Stack Developer",
          company: "Future Tech Solutions",
          period: "2023 - Present",
          location: "Budapest, Hungary",
          description: "Leading a team of developers in building enterprise-scale web applications. Implemented modern CI/CD practices, reducing deployment time by 60%. Architected and delivered multiple high-impact projects using cutting-edge technologies.",
          tech: ["TypeScript", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes"]
        },
        {
          title: "Senior Software Engineer",
          company: "Digital Innovations Hub",
          period: "2021 - 2023",
          location: "Budapest, Hungary",
          description: "Spearheaded the development of a revolutionary fintech platform serving over 100,000 users. Optimized application performance and implemented robust security measures. Mentored junior developers and established best practices.",
          tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
        },
        {
          title: "Full Stack Developer",
          company: "Tech Ventures Inc",
          period: "2019 - 2021",
          location: "Remote",
          description: "Developed and launched multiple successful web applications from concept to deployment. Collaborated with cross-functional teams to deliver feature-rich solutions. Improved system architecture and implemented performance optimizations.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker", "GCP"]
        }
      ]
    },
    about: {
      title: "About Me",
      subtitle: "Getting to know me better",
      welcome: "Welcome to my corner of the digital world! I'm a passionate software developer with 5+ years of experience in web development, specializing in building modern web applications. My expertise spans across the full stack, from crafting intuitive user interfaces to designing robust backend systems.",
      career: "Throughout my career, I've had the opportunity to work with diverse technologies and lead multiple successful projects. I thrive on solving complex technical challenges and continuously exploring new technologies to create innovative solutions that make a real impact.",
      experienceTitle: "Experience",
      educationTitle: "Education",
      technicalTitle: "Technical Proficiencies",
      experienceItems: [
        "5+ years in web development",
        "Full-stack expertise",
        "Team leadership experience"
      ],
      educationItems: [
        "BSc in Computer Science",
        "Multiple certifications",
        "Continuous learner"
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with"
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      viewProject: "View Project",
      items: [
        {
          title: "E-commerce Platform",
          description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and analytics."
        },
        {
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates and team collaboration features."
        },
        {
          title: "AI Image Generator",
          description: "An advanced AI-powered image generation tool using stable diffusion and neural networks."
        },
        {
          title: "Blockchain Explorer",
          description: "A comprehensive blockchain explorer with real-time transaction tracking and analytics."
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      sendEmail: "Send Email"
    },
    footer: {
      year: "2025",
      name: "Peter Varga",
      allRights: "All rights reserved."
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    }
  },
  egy: {
    hero: {
      greeting: "𓇍𓄿𓈖𓂧𓏏 𓂞𓈖𓎡",
      name_suffix: "",
      tagline: "𓂞𓈖𓎡 𓈙𓂝𓄿𓊪𓏏 𓈖 𓇾𓈇 𓈖𓄿𓇳 𓉔𓃀𓄿𓇳 𓄞𓂋𓅱 𓈖𓄿𓇳 𓈖𓈙𓇯𓏏",
      cta: "𓇋𓂋 𓌸𓂞"
    },
    experience: {
      title: "𓈖𓈙𓇯𓏏",
      subtitle: "𓇍𓂞𓏏 𓂞𓈖𓎡 𓈖 𓊨𓐍𓅱",
      jobs: [
        {
          title: "𓊨𓐍𓈖𓈖 𓊃𓈖𓏭 𓈖 𓈙𓂝𓄿𓊪",
          company: "Future Tech Solutions",
          period: "2023 - 𓇾𓈅𓄿",
          location: "𓃀𓅱𓂧𓄿𓊪𓏏, 𓋹𓈖𓐍𓂋",
          description: "𓂞𓈖𓎡 𓊨𓐍𓈖𓈖 𓊃𓈖𓏭 𓈖 𓈙𓂝𓄿𓊪𓏏 𓅓 𓊃𓈖𓏭 𓈖 𓂧𓈎𓋴𓏏 𓉔𓃀𓄿. 𓂞𓈖𓎡 𓊃𓈖𓏭 𓈖𓄿𓇳 𓉔𓃀𓄿 𓈖 𓊪𓂋 𓃹𓈖𓈖.",
          tech: ["TypeScript", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes"]
        },
        {
          title: "𓊃𓐍𓅱 𓈖 𓈙𓂝𓄿𓊪",
          company: "Digital Innovations Hub",
          period: "2021 - 2023",
          location: "𓃀𓅱𓂧𓄿𓊪𓏏, 𓋹𓈖𓐍𓂋",
          description: "𓂞𓈖𓎡 𓊨𓐍𓈖𓈖 𓊃𓈖𓏭 𓈖 𓂧𓃀𓈖 𓆓𓂧 𓌸𓂞𓃀𓈖. 𓇋𓂋 𓈖𓄿𓇳 𓉔𓃀𓄿 𓅓 𓉐𓂋𓏏 𓈖 𓌸𓃀𓂝𓄿.",
          tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
        },
        {
          title: "𓈙𓂝𓄿𓊪 𓈖 𓄞𓂋𓄿𓇳",
          company: "Tech Ventures Inc",
          period: "2019 - 2021",
          location: "𓄞𓂋 𓉔𓏏𓊪",
          description: "𓂞𓈖𓎡 𓊃𓈖𓏭 𓈖𓄿𓇳 𓂧𓃀𓈖 𓅓 𓄞𓂋 𓈖 𓊪𓄿𓇳. 𓇋𓂋 𓈖𓄿𓇳 𓊃𓈖𓊪 𓅓 𓊰𓃀𓈖.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker", "GCP"]
        }
      ]
    },
    about: {
      title: "𓂞𓅓 𓂞𓈖𓎡",
      subtitle: "𓂋𓐍 𓂞𓈖𓎡 𓅓 𓉐𓂋𓏏",
      welcome: "𓇍𓄿𓈖𓂧𓏏 𓂞𓈖 𓉐𓂋 𓈖 𓂧𓇋𓇋𓏏𓄿𓃭! 𓂞𓈖𓎡 𓈙𓂝𓄿𓊪 𓈖 𓊪𓄿𓇳 𓉔𓃀𓄿𓇳 𓅓 5 𓈖𓅱𓏏 𓈖 𓊃𓈖𓊪. 𓂞𓈖𓎡 𓇋𓐍𓈖 𓅓 𓊃𓈖𓏭 𓈖 𓂧𓃀𓈖 𓈖𓄿𓇳.",
      career: "𓂞𓈖𓎡 𓊃𓈖𓏭 𓅓 𓉐𓂋𓏏 𓈖 𓈖𓈙𓇯𓏏 𓈖𓏏 𓈖𓄿𓇳. 𓂞𓈖𓎡 𓐍𓂋 𓈖𓄿𓇳 𓊃𓈖𓏭 𓈖 𓇋𓃀 𓈖𓈙𓇯𓏏.",
      experienceTitle: "𓈖𓈙𓇯𓏏",
      educationTitle: "𓊃𓃀𓄿",
      technicalTitle: "𓇋𓐍𓏏 𓈖 𓈙𓂝𓄿𓊪",
      experienceItems: [
        "5+ 𓈖𓅱𓏏 𓅓 𓊃𓈖𓏭 𓊪𓄿𓇳",
        "𓇋𓐍𓏏 𓈖 𓄞𓂋𓄿𓇳",
        "𓊨𓐍𓈖𓈖 𓊃𓈖𓏭"
      ],
      educationItems: [
        "𓊃𓃀𓄿 𓈖 𓈎𓊪𓏏",
        "𓆓𓂧 𓊃𓃀𓄿",
        "𓊃𓃀𓄿 𓅓 𓊪𓄿"
      ]
    },
    skills: {
      title: "𓇋𓐍𓏏",
      subtitle: "𓊪𓄿𓇳 𓂞𓈖𓎡 𓊃𓈖𓏭"
    },
    projects: {
      title: "𓊪𓄿𓇳",
      subtitle: "𓊪𓄿𓇳 𓂞𓈖𓎡 𓈖 𓈖𓅱",
      viewProject: "𓐍𓂋 𓊪𓄿𓇳",
      items: [
        {
          title: "𓊪𓄿𓇳 𓈖 𓊃𓐍𓂋",
          description: "𓊪𓄿𓇳 𓈖 𓊃𓐍𓂋 𓈖𓄿𓇳 𓅓 Next.js 𓊃𓂧 Stripe. 𓂞𓂋 𓅓 𓐍𓏏 𓐍𓄿𓃀𓈖."
        },
        {
          title: "𓊪𓄿𓇳 𓈖 𓇋𓃀",
          description: "𓊪𓄿𓇳 𓈖 𓇋𓃀 𓅓 𓊃𓈖𓏭 𓊰𓃀𓈖. 𓂞𓂋 𓅓 𓐍𓏏 𓈖𓅱."
        },
        {
          title: "𓊪𓄿𓇳 𓈖 𓄿𓂋 AI",
          description: "𓊪𓄿𓇳 𓈖 𓄿𓂋 𓅓 AI 𓉔𓊨. 𓂞𓂋 𓅓 𓐍𓏏 𓄞𓂋 𓏏𓊪."
        },
        {
          title: "𓊪𓄿𓇳 𓈖 𓇳𓄿𓃀",
          description: "𓊪𓄿𓇳 𓈖 𓇳𓄿𓃀 𓅓 𓐍𓂋 𓅓 𓇋𓃀. 𓂞𓂋 𓅓 𓐍𓏏 𓈖𓅱."
        }
      ]
    },
    contact: {
      title: "𓌸𓂞",
      subtitle: "𓊃𓈖𓏭 𓊰𓃀𓈖",
      sendEmail: "𓌸𓂞 𓇋𓂋"
    },
    footer: {
      year: "2025",
      name: "Peter Varga",
      allRights: "𓄞𓂋𓄿𓇳 𓈖𓃀."
    },
    nav: {
      about: "𓂞𓅓 𓂞𓈖𓎡",
      experience: "𓈖𓈙𓇯𓏏",
      skills: "𓇋𓐍𓏏",
      projects: "𓊪𓄿𓇳",
      contact: "𓌸𓂞"
    }
  },
  hu: {
    hero: {
      greeting: "Szia, a nevem",
      name_suffix: "",
      tagline: "Elkötelezett szoftverfejlesztő vagyok, aki szeret csodálatos dolgokat építeni.",
      cta: "Vedd fel velem a kapcsolatot"
    },
    experience: {
      title: "Tapasztalat",
      subtitle: "A szakmai utam",
      jobs: [
        {
          title: "Vezető Full Stack Fejlesztő",
          company: "Future Tech Solutions",
          period: "2023 - Jelenleg",
          location: "Budapest, Magyarország",
          description: "Fejlesztői csapat vezetése vállalati léptékű webalkalmazások építésében. Modern CI/CD gyakorlatok bevezetése, 60%-kal csökkentve a telepítési időt. Több nagy hatású projekt tervezése és szállítása élvonalbeli technológiák használatával.",
          tech: ["TypeScript", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes"]
        },
        {
          title: "Senior Szoftvermérnök",
          company: "Digital Innovations Hub",
          period: "2021 - 2023",
          location: "Budapest, Magyarország",
          description: "Forradalmi fintech platform fejlesztésének vezetése, több mint 100,000 felhasználót szolgálva ki. Alkalmazás teljesítmény optimalizálása és robusztus biztonsági intézkedések bevezetése. Junior fejlesztők mentorálása és legjobb gyakorlatok kialakítása.",
          tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
        },
        {
          title: "Full Stack Fejlesztő",
          company: "Tech Ventures Inc",
          period: "2019 - 2021",
          location: "Távmunka",
          description: "Több sikeres webalkalmazás fejlesztése és piacra bocsátása a koncepciótól a telepítésig. Együttműködés keresztfunkcionális csapatokkal funkciógazdag megoldások szállítására. Rendszerarchitektúra javítása és teljesítmény optimalizálások megvalósítása.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker", "GCP"]
        }
      ]
    },
    about: {
      title: "Rólam",
      subtitle: "Ismerj meg jobban",
      welcome: "Üdvözöllek a digitális világom sarkában! Lelkes szoftverfejlesztő vagyok, több mint 5 év tapasztalattal a webfejlesztésben, modern webalkalmazások építésére specializálódva. Szakértelmem a teljes stackre kiterjed, az intuitív felhasználói felületek készítésétől a robusztus backend rendszerek tervezéséig.",
      career: "Pályafutásom során lehetőségem volt változatos technológiákkal dolgozni és több sikeres projektet vezetni. Élvezem a komplex technikai kihívások megoldását és folyamatosan új technológiákat fedezek fel, hogy innovatív megoldásokat hozzak létre, amelyek valódi hatást gyakorolnak.",
      experienceTitle: "Tapasztalat",
      educationTitle: "Képzés",
      technicalTitle: "Technikai Kompetenciák",
      experienceItems: [
        "5+ év webfejlesztésben",
        "Full-stack szakértelem",
        "Csapatvezetői tapasztalat"
      ],
      educationItems: [
        "BSc Számítástechnika",
        "Több tanúsítvány",
        "Folyamatos tanuló"
      ]
    },
    skills: {
      title: "Készségek",
      subtitle: "Technológiák, amikkel dolgozom"
    },
    projects: {
      title: "Projektek",
      subtitle: "Néhány újabb munkám",
      viewProject: "Projekt megtekintése",
      items: [
        {
          title: "E-kereskedelmi Platform",
          description: "Modern e-kereskedelmi platform Next.js-sel és Stripe-pal építve, valós idejű készletkezeléssel és analitikával."
        },
        {
          title: "Feladatkezelő Alkalmazás",
          description: "Együttműködő feladatkezelő alkalmazás valós idejű frissítésekkel és csapatmunka funkciókkal."
        },
        {
          title: "AI Képgenerátor",
          description: "Fejlett mesterséges intelligencia alapú képgenerálő eszköz stable diffusion és neurális hálózatok használatával."
        },
        {
          title: "Blockchain Böngésző",
          description: "Átfogó blockchain böngésző valós idejű tranzakciókövetéssel és részletes analitikával."
        }
      ]
    },
    contact: {
      title: "Kapcsolat",
      subtitle: "Dolgozzunk együtt",
      sendEmail: "Email küldése"
    },
    footer: {
      year: "2025",
      name: "Varga Péter",
      allRights: "Minden jog fenntartva."
    },
    nav: {
      about: "Rólam",
      experience: "Tapasztalat",
      skills: "Készségek",
      projects: "Projektek",
      contact: "Kapcsolat"
    }
  },
  ja: {
    hero: {
      greeting: "こんにちは、私は",
      name_suffix: "です",
      tagline: "素晴らしいものを作ることが好きな献身的なソフトウェア開発者です。",
      cta: "お問い合わせ"
    },
    experience: {
      title: "経験",
      subtitle: "私の専門的な歩み",
      jobs: [
        {
          title: "リードフルスタック開発者",
          company: "Future Tech Solutions",
          period: "2023 - 現在",
          location: "ブダペスト、ハンガリー",
          description: "企業規模のWebアプリケーション構築において開発者チームをリードしています。最新のCI/CDプラクティスを実装し、デプロイ時間を60%短縮しました。最先端技術を使用して複数の高インパクトプロジェクトを設計・提供しました。",
          tech: ["TypeScript", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes"]
        },
        {
          title: "シニアソフトウェアエンジニア",
          company: "Digital Innovations Hub",
          period: "2021 - 2023",
          location: "ブダペスト、ハンガリー",
          description: "10万人以上のユーザーにサービスを提供する革新的なフィンテックプラットフォームの開発をリードしました。アプリケーションのパフォーマンスを最適化し、堅牢なセキュリティ対策を実装しました。ジュニア開発者のメンターを行い、ベストプラクティスを確立しました。",
          tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
        },
        {
          title: "フルスタック開発者",
          company: "Tech Ventures Inc",
          period: "2019 - 2021",
          location: "リモート",
          description: "コンセプトからデプロイまで複数の成功したWebアプリケーションを開発・リリースしました。機能豊富なソリューションを提供するために部門横断チームと協力しました。システムアーキテクチャを改善し、パフォーマンス最適化を実装しました。",
          tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker", "GCP"]
        }
      ]
    },
    about: {
      title: "自己紹介",
      subtitle: "私についてより詳しく",
      welcome: "私のデジタル世界へようこそ！私はWeb開発分野で5年以上の経験を持つ情熱的なソフトウェア開発者で、現代的なWebアプリケーションの構築を専門としています。私の専門知識は、直感的なユーザーインターフェースの作成から堅牢なバックエンドシステムの設計まで、フルスタック全般に及んでいます。",
      career: "キャリアを通して、多様な技術と働き、複数の成功プロジェクトをリードする機会に恵まれました。複雑な技術的課題を解決することに喜びを感じ、実際に影響を与える革新的なソリューションを作るために新しい技術を継続的に探求しています。",
      experienceTitle: "経験",
      educationTitle: "教育",
      technicalTitle: "技術的専門性",
      experienceItems: [
        "Web開発5年以上",
        "フルスタック専門知識",
        "チームリーダーシップ経験"
      ],
      educationItems: [
        "コンピュータサイエンス学士",
        "複数の資格",
        "継続的学習者"
      ]
    },
    skills: {
      title: "スキル",
      subtitle: "使用している技術"
    },
    projects: {
      title: "プロジェクト",
      subtitle: "最近の作品",
      viewProject: "プロジェクトを見る",
      items: [
        {
          title: "Eコマースプラットフォーム",
          description: "リアルタイム在庫管理と分析機能を備えた、Next.jsとStripeで構築された現代的なEコマースプラットフォームです。"
        },
        {
          title: "タスク管理アプリ",
          description: "リアルタイム更新とチーム協力機能を備えた協力型タスク管理アプリケーションです。"
        },
        {
          title: "AI画像生成器",
          description: "ステーブルディフュージョンとニューラルネットワークを使用した高度なAI駆動画像生成ツールです。"
        },
        {
          title: "ブロックチェーンエクスプローラー",
          description: "リアルタイムトランザクション追跡と分析機能を備えた包括的なブロックチェーンエクスプローラーです。"
        }
      ]
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "一緒に働きましょう",
      sendEmail: "メールを送る"
    },
    footer: {
      year: "2025",
      name: "Peter Varga",
      allRights: "無断転載禁止。"
    },
    nav: {
      about: "自己紹介",
      experience: "経験",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ"
    }
  },
  ko: {
    hero: {
      greeting: "안녕하세요, 저는",
      name_suffix: "입니다",
      tagline: "훌륭한 것들을 만드는 것을 좋아하는 헌신적인 소프트웨어 개발자입니다.",
      cta: "연락하기"
    },
    experience: {
      title: "경력",
      subtitle: "나의 전문적인 여정",
      jobs: [
        {
          title: "수석 풀스택 개발자",
          company: "Future Tech Solutions",
          period: "2023 - 현재",
          location: "부다페스트, 헝가리",
          description: "기업급 웹 애플리케이션 구축에서 개발자 팀을 이끌고 있습니다. 현대적인 CI/CD 관행을 구현하여 배포 시간을 60% 단축했습니다. 최첨단 기술을 사용하여 여러 고영향 프로젝트를 설계하고 제공했습니다.",
          tech: ["TypeScript", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes"]
        },
        {
          title: "수석 소프트웨어 엔지니어",
          company: "Digital Innovations Hub",
          period: "2021 - 2023",
          location: "부다페스트, 헝가리",
          description: "100,000명 이상의 사용자에게 서비스를 제공하는 혁신적인 핀테크 플랫폼 개발을 주도했습니다. 애플리케이션 성능을 최적화하고 강력한 보안 조치를 구현했습니다. 주니어 개발자들을 멘토링하고 모범 사례를 확립했습니다.",
          tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
        },
        {
          title: "풀스택 개발자",
          company: "Tech Ventures Inc",
          period: "2019 - 2021",
          location: "원격근무",
          description: "개념부터 배포까지 여러 성공적인 웹 애플리케이션을 개발하고 출시했습니다. 기능이 풍부한 솔루션을 제공하기 위해 교차 기능 팀과 협업했습니다. 시스템 아키텍처를 개선하고 성능 최적화를 구현했습니다.",
          tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker", "GCP"]
        }
      ]
    },
    about: {
      title: "소개",
      subtitle: "저를 더 자세히 알아보세요",
      welcome: "제 디지털 세계의 한 구석에 오신 것을 환영합니다! 저는 웹 개발 분야에서 5년 이상의 경험을 가진 열정적인 소프트웨어 개발자로, 현대적인 웹 애플리케이션 구축을 전문으로 합니다. 제 전문 지식은 직관적인 사용자 인터페이스 제작부터 견고한 백엔드 시스템 설계까지 풀스택 전반에 걸쳐 있습니다.",
      career: "제 경력을 통해 다양한 기술과 함께 작업하고 여러 성공적인 프로젝트를 이끌 기회를 가졌습니다. 저는 복잡한 기술적 도전을 해결하는 것을 즐기며 실제 영향을 미치는 혁신적인 솔루션을 만들기 위해 지속적으로 새로운 기술을 탐구합니다.",
      experienceTitle: "경험",
      educationTitle: "교육",
      technicalTitle: "기술적 숙련도",
      experienceItems: [
        "웹 개발 5년 이상",
        "풀스택 전문성",
        "팀 리더십 경험"
      ],
      educationItems: [
        "컴퓨터 공학 학사",
        "다수의 자격증",
        "평생 학습자"
      ]
    },
    skills: {
      title: "기술",
      subtitle: "제가 작업하는 기술들"
    },
    projects: {
      title: "프로젝트",
      subtitle: "최근 작업들",
      viewProject: "프로젝트 보기",
      items: [
        {
          title: "전자상거래 플랫폼",
          description: "실시간 재고 관리와 분석 기능을 갖춘 Next.js와 Stripe로 구축된 현대적인 전자상거래 플랫폼입니다."
        },
        {
          title: "작업 관리 앱",
          description: "실시간 업데이트와 팀 협업 기능을 갖춘 협업형 작업 관리 애플리케이션입니다."
        },
        {
          title: "AI 이미지 생성기",
          description: "스테이블 디퓨전과 신경망을 사용한 고급 AI 기반 이미지 생성 도구입니다."
        },
        {
          title: "블록체인 익스플로러",
          description: "실시간 거래 추적과 분석 기능을 갖춘 종합적인 블록체인 익스플로러입니다."
        }
      ]
    },
    contact: {
      title: "연락처",
      subtitle: "함께 일해요",
      sendEmail: "이메일 보내기"
    },
    footer: {
      year: "2025",
      name: "Peter Varga",
      allRights: "모든 권리 보유."
    },
    nav: {
      about: "소개",
      experience: "경력",
      skills: "기술",
      projects: "프로젝트",
      contact: "연락처"
    }
  }
} as const;