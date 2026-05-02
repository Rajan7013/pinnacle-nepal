export interface HeroSlide {
  id: number;
  title: string;
  highlight: string;
  desc: string;
  image: string; // base filename (used in path: /images/hero/{device}/{image}.png)
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    title: "Visa Processing",
    highlight: "Hassle-Free Visa Assistance",
    desc: "98% visa success rate with expert documentation and interview guidance for 15+ countries.",
    image: "VISA PROCESSING",
  },
  {
    id: 1,
    title: "Study in India",
    highlight: "Premier Medical & Engineering Colleges",
    desc: "Affordable MBBS, BTech, and MBA programs in top Indian universities with global recognition.",
    image: "STUDY IN INDIA",
  },
  {
    id: 2,
    title: "Study Abroad",
    highlight: "Your Gateway to Global Education",
    desc: "Pursue your dreams in USA, UK, Canada, Australia and 40+ top universities worldwide.",
    image: "STUDY ABROAD",
  },
  {
    id: 3,
    title: "Career Counseling",
    highlight: "Find Your Perfect Path",
    desc: "Expert guidance to choose the right course and university based on your goals and budget.",
    image: "CAREER COUNSELING",
  },
  {
    id: 4,
    title: "Test Preparation",
    highlight: "Ace IELTS, TOEFL, SAT",
    desc: "Comprehensive coaching with certified trainers, mock tests, and personalized study plans.",
    image: "TEST PREPARATION",
  },
];
