export interface Course {
    id: string;
    title: string;
    image: string;
    description?: string;
}

export const courses: Course[] = [
    {
        id: "management",
        title: "Business Management",
        image: "/images/courses/bba.jpg",
        description: "Develop leadership skills and business acumen for global corporate environments."
    },
    {
        id: "engineering",
        title: "Engineering",
        image: "/images/courses/engineering.jpg",
        description: "Innovative engineering programs across civil, computer, electrical, and mechanical fields."
    },
    {
        id: "cs",
        title: "Computer Science",
        image: "/images/courses/computer-science.jpg",
        description: "State-of-the-art curriculum in software development, AI, and data science."
    },
    {
        id: "healthcare",
        title: "Healthcare",
        image: "/images/courses/healthcare.jpg",
        description: "Comprehensive healthcare and nursing programs with practical clinical experience."
    },
    {
        id: "mbbs",
        title: "MBBS",
        image: "/images/courses/mbbs.jpg",
        description: "World-class medical education preparing future doctors for global practice."
    },
    {
        id: "btech",
        title: "BTech",
        image: "/images/courses/btech.jpg",
        description: "Advanced technological studies focusing on practical application and industry needs."
    },
    {
        id: "humanities",
        title: "IT, Pharmacy & Humanities",
        image: "/images/courses/it-pharmacy-humanities.jpg",
        description: "Diverse programs ranging from pharmaceutical sciences to social studies."
    },
    {
        id: "mba",
        title: "MBA",
        image: "/images/courses/mba.jpg",
        description: "Advanced business degree for accelerating your career in management."
    }
];
