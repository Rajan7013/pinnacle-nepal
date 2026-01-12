// Blog post data structure for Pinnacle Nepal
export interface BlogPost {
    slug: string;
    title: string;
    cardTitle?: string; // Shorter title for card display
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    keywords: string[];
    metaDescription: string;
}

export const blogPosts: BlogPost[] = [
    // Featured Article - Pinnacle Nepal
    {
        slug: "pinnacle-nepal-leading-consultancy",
        title: "Pinnacle Nepal: Leading Educational Consultancy in Kathmandu",
        cardTitle: "Pinnacle Nepal: Top Consultancy in Kathmandu",
        excerpt: "Discover why Pinnacle Nepal is the top educational consultancy in Nepal. Learn about our services, success stories, and how we help 500+ students annually achieve their study abroad dreams.",
        date: "2026-01-13",
        author: "Pinnacle Nepal Team",
        category: "About Us",
        readTime: "10 min read",
        keywords: ["pinnacle nepal", "top educational consultancy nepal", "study abroad consultancy", "best consultancy kathmandu"],
        metaDescription: "Pinnacle Nepal is the leading educational consultancy in Kathmandu with 500+ students placed annually. Expert guidance for MBBS, Engineering, MBA abroad in 15 countries."
    },

    // MBBS & Medical Education
    {
        slug: "complete-guide-mbbs-india-2026",
        title: "Complete Guide to Studying MBBS in India from Nepal 2026",
        cardTitle: "MBBS in India: Complete Guide 2026",
        excerpt: "Everything you need to know about pursuing MBBS in India - admission process, top colleges, eligibility, and NEET requirements for Nepalese students.",
        date: "2026-01-12",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "8 min read",
        keywords: ["MBBS in India", "study MBBS from Nepal", "NEET for Nepalese students", "medical colleges India"],
        metaDescription: "Complete guide for Nepalese students: MBBS admission in India, top medical colleges, NEET requirements, eligibility criteria, and admission process 2026."
    },
    {
        slug: "mbbs-russia-complete-guide",
        title: "MBBS in Russia: Complete Guide for Nepalese Students 2026",
        cardTitle: "MBBS in Russia: Complete Guide 2026",
        excerpt: "Discover why Russia is a top choice for MBBS. Learn about admission process, top universities, eligibility, and life as a Nepalese student in Russia.",
        date: "2026-01-11",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "7 min read",
        keywords: ["MBBS in Russia", "Russian medical universities", "study medicine Russia", "MBBS abroad"],
        metaDescription: "Complete guide to MBBS in Russia for Nepalese students: admission process, top medical universities, eligibility, costs, and student life 2026."
    },
    {
        slug: "mbbs-bangladesh-top-colleges",
        title: "MBBS in Bangladesh: Top Medical Colleges 2026",
        cardTitle: "MBBS in Bangladesh: Top Colleges 2026",
        excerpt: "Explore MBBS opportunities in Bangladesh. Learn about top medical colleges, admission requirements, and why Bangladesh is ideal for Nepalese students.",
        date: "2026-01-10",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "6 min read",
        keywords: ["MBBS in Bangladesh", "Bangladesh medical colleges", "study medicine Bangladesh"],
        metaDescription: "Top medical colleges in Bangladesh for MBBS: admission process, eligibility criteria, and complete guide for Nepalese students 2026."
    },
    {
        slug: "mbbs-china-admission-process",
        title: "MBBS in China: Admission Process & Top Universities 2026",
        excerpt: "Complete guide to pursuing MBBS in China. Discover top medical universities, admission requirements, and opportunities for Nepalese students.",
        date: "2026-01-09",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "7 min read",
        keywords: ["MBBS in China", "Chinese medical universities", "study medicine China"],
        metaDescription: "MBBS in China for Nepalese students: top medical universities, admission process, eligibility requirements, and complete guide 2026."
    },
    {
        slug: "neet-preparation-guide-nepal",
        title: "How to Prepare for NEET from Nepal: Complete Strategy 2026",
        excerpt: "Master NEET preparation from Nepal. Get expert tips, study strategies, resources, and timeline to crack NEET for MBBS admission in India.",
        date: "2026-01-08",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "9 min read",
        keywords: ["NEET preparation Nepal", "NEET exam", "MBBS entrance exam", "study tips NEET"],
        metaDescription: "Complete NEET preparation guide for Nepalese students: study strategy, resources, timeline, and expert tips to crack NEET 2026."
    },

    // Study Abroad Guides
    {
        slug: "study-abroad-nepal-complete-guide",
        title: "Study Abroad from Nepal: Complete Guide 2026",
        excerpt: "Your ultimate guide to studying abroad from Nepal. Explore destinations, courses, scholarships, visa process, and how to choose the right country.",
        date: "2026-01-07",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad",
        readTime: "10 min read",
        keywords: ["study abroad from Nepal", "international education", "study overseas Nepal"],
        metaDescription: "Complete guide for Nepalese students studying abroad: destinations, courses, scholarships, visa process, and country selection 2026."
    },
    {
        slug: "choose-right-country-higher-education",
        title: "How to Choose the Right Country for Higher Education",
        excerpt: "Make the right choice for your future. Compare countries, understand factors to consider, and find the perfect destination for your education.",
        date: "2026-01-06",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad",
        readTime: "8 min read",
        keywords: ["choose study destination", "best country for education", "study abroad comparison"],
        metaDescription: "How to choose the right country for higher education: factors to consider, country comparison, and expert guidance for Nepalese students."
    },
    {
        slug: "scholarship-opportunities-nepalese-students",
        title: "Scholarship Opportunities for Nepalese Students Abroad 2026",
        excerpt: "Discover scholarship opportunities for Nepalese students. Learn about government scholarships, university grants, and how to apply successfully.",
        date: "2026-01-05",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad",
        readTime: "7 min read",
        keywords: ["scholarships for Nepalese students", "study abroad scholarships", "education grants"],
        metaDescription: "Complete guide to scholarships for Nepalese students: government scholarships, university grants, application process, and eligibility 2026."
    },

    // Engineering & Technical
    {
        slug: "engineering-abroad-best-countries",
        title: "Engineering Abroad: Best Countries for Nepalese Students 2026",
        excerpt: "Explore top destinations for engineering education. Compare countries, programs, and opportunities for Nepalese engineering students.",
        date: "2026-01-04",
        author: "Pinnacle Nepal Team",
        category: "Engineering",
        readTime: "8 min read",
        keywords: ["engineering abroad", "study engineering overseas", "best countries for engineering"],
        metaDescription: "Best countries for engineering education: comparison, top programs, and complete guide for Nepalese students 2026."
    },
    {
        slug: "btech-india-top-colleges",
        title: "BTech in India: Top Colleges & Admission Process 2026",
        excerpt: "Complete guide to BTech in India. Discover top engineering colleges, admission process, JEE requirements, and opportunities for Nepalese students.",
        date: "2026-01-03",
        author: "Pinnacle Nepal Team",
        category: "Engineering",
        readTime: "7 min read",
        keywords: ["BTech in India", "engineering colleges India", "JEE for Nepalese students"],
        metaDescription: "BTech in India for Nepalese students: top engineering colleges, admission process, JEE requirements, and complete guide 2026."
    },
    {
        slug: "computer-science-abroad-opportunities",
        title: "Computer Science Abroad: Career Opportunities & Top Universities",
        excerpt: "Explore computer science education abroad. Learn about top universities, specializations, career prospects, and tech industry opportunities.",
        date: "2026-01-02",
        author: "Pinnacle Nepal Team",
        category: "Engineering",
        readTime: "8 min read",
        keywords: ["computer science abroad", "CS programs overseas", "tech education"],
        metaDescription: "Computer science education abroad: top universities, specializations, career opportunities, and complete guide for Nepalese students."
    },

    // Consultancy Guides
    {
        slug: "top-educational-consultancies-nepal",
        title: "Top 10 Educational Consultancies in Nepal: How to Choose",
        excerpt: "Comprehensive guide to selecting the best educational consultancy in Nepal. Learn what to look for, red flags to avoid, and how to make the right choice.",
        date: "2026-01-01",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad Tips",
        readTime: "6 min read",
        keywords: ["educational consultancy Nepal", "study abroad consultants", "Pinnacle Nepal"],
        metaDescription: "How to choose the best educational consultancy in Nepal: evaluation criteria, red flags, and expert guidance 2026."
    },
    {
        slug: "student-visa-guide-multiple-countries",
        title: "Student Visa Guide: India, Russia, China, Bangladesh 2026",
        excerpt: "Complete student visa guide for multiple countries. Learn about requirements, application process, documents, and tips for successful visa approval.",
        date: "2025-12-31",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad Tips",
        readTime: "9 min read",
        keywords: ["student visa", "visa application process", "study visa requirements"],
        metaDescription: "Complete student visa guide for Nepalese students: requirements, application process, documents, and tips for India, Russia, China, Bangladesh."
    },
    {
        slug: "document-checklist-study-abroad",
        title: "Document Checklist for Study Abroad Applications 2026",
        excerpt: "Essential document checklist for studying abroad. Ensure you have everything needed for a successful application to international universities.",
        date: "2025-12-30",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad Tips",
        readTime: "5 min read",
        keywords: ["study abroad documents", "application checklist", "required documents"],
        metaDescription: "Complete document checklist for study abroad applications: essential documents, preparation tips, and requirements for Nepalese students."
    },
    {
        slug: "common-mistakes-study-abroad-applications",
        title: "Common Mistakes to Avoid When Applying Abroad",
        excerpt: "Learn from others' mistakes. Discover common pitfalls in study abroad applications and how to avoid them for a successful admission.",
        date: "2025-12-29",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad Tips",
        readTime: "6 min read",
        keywords: ["study abroad mistakes", "application errors", "admission tips"],
        metaDescription: "Common mistakes in study abroad applications and how to avoid them: expert tips for Nepalese students applying to international universities."
    },

    // Country-Specific Guides
    {
        slug: "study-in-india-from-nepal",
        title: "Study in India from Nepal: Complete Guide 2026",
        excerpt: "Comprehensive guide to studying in India from Nepal. Explore courses, top universities, admission process, and life as a Nepalese student in India.",
        date: "2025-12-28",
        author: "Pinnacle Nepal Team",
        category: "Country Guides",
        readTime: "10 min read",
        keywords: ["study in India from Nepal", "Indian universities", "education in India"],
        metaDescription: "Complete guide to studying in India from Nepal: courses, universities, admission process, visa, and student life 2026."
    },
    {
        slug: "study-in-russia-from-nepal",
        title: "Study in Russia from Nepal: Everything You Need to Know",
        excerpt: "Discover education opportunities in Russia. Learn about universities, courses, admission process, and student life for Nepalese students.",
        date: "2025-12-27",
        author: "Pinnacle Nepal Team",
        category: "Country Guides",
        readTime: "8 min read",
        keywords: ["study in Russia from Nepal", "Russian universities", "education in Russia"],
        metaDescription: "Study in Russia from Nepal: universities, courses, admission process, visa requirements, and student life guide 2026."
    },
    {
        slug: "study-in-china-from-nepal",
        title: "Study in China from Nepal: Universities & Courses 2026",
        excerpt: "Explore educational opportunities in China. Discover top universities, popular courses, and what makes China an attractive study destination.",
        date: "2025-12-26",
        author: "Pinnacle Nepal Team",
        category: "Country Guides",
        readTime: "7 min read",
        keywords: ["study in China from Nepal", "Chinese universities", "education in China"],
        metaDescription: "Study in China from Nepal: top universities, courses, admission requirements, and complete guide for Nepalese students 2026."
    },
    {
        slug: "study-in-bangladesh-from-nepal",
        title: "Study in Bangladesh from Nepal: MBBS & Engineering 2026",
        excerpt: "Complete guide to studying in Bangladesh. Learn about MBBS and engineering programs, top universities, and admission process for Nepalese students.",
        date: "2025-12-25",
        author: "Pinnacle Nepal Team",
        category: "Country Guides",
        readTime: "6 min read",
        keywords: ["study in Bangladesh from Nepal", "Bangladesh universities", "MBBS Bangladesh"],
        metaDescription: "Study in Bangladesh from Nepal: MBBS and engineering programs, top universities, admission process, and complete guide 2026."
    },

    // Student Life
    {
        slug: "life-nepalese-student-india",
        title: "Life as a Nepalese Student in India: Real Experiences",
        excerpt: "Real stories and experiences from Nepalese students in India. Learn about campus life, cultural adaptation, and making the most of your time abroad.",
        date: "2025-12-24",
        author: "Pinnacle Nepal Team",
        category: "Student Life",
        readTime: "7 min read",
        keywords: ["Nepalese students in India", "student life India", "study abroad experience"],
        metaDescription: "Life as a Nepalese student in India: real experiences, campus life, cultural adaptation, and tips for success."
    },
    {
        slug: "managing-finances-studying-abroad",
        title: "Managing Finances While Studying Abroad: Complete Guide",
        excerpt: "Master financial management while studying abroad. Learn budgeting tips, part-time work opportunities, and how to make your money last.",
        date: "2025-12-23",
        author: "Pinnacle Nepal Team",
        category: "Student Life",
        readTime: "8 min read",
        keywords: ["student finances abroad", "budgeting for students", "part-time work abroad"],
        metaDescription: "Complete guide to managing finances while studying abroad: budgeting tips, part-time work, scholarships, and financial planning for students."
    },
];
