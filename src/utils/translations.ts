// Language definitions with native names
export const languages = {
  en: { code: 'en', name: 'English', nativeName: 'English' },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' }
} as const;

export type LanguageCode = keyof typeof languages;

// Alphabetically sorted language codes for dropdowns
export const sortedLanguages = Object.values(languages).sort((a, b) => a.nativeName.localeCompare(b.nativeName));

export const translations = {
  en: {
    hero: {
      greeting: "Hi, I'm",
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
  hu: {
    hero: {
      greeting: "Szia, a nevem",
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
  }
} as const;