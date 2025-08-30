export interface Project {
    id: number;
    title: string;
    image: string;
    location: string;
    year: string;
    time: string;
    description: string;
    technologies: string[];
    role: string;
    status: "upcoming" | "past"; // faqat shu ikki qiymat
    link: string;
}
