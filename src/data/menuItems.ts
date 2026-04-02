import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Stukadoors", url: "/chatbot-voor-stukadoors" },
            { text: "Voice AI voor Stukadoors", url: "/voice-ai-voor-stukadoors" },
            { text: "SEO voor Stukadoors", url: "/seo-voor-stukadoors" },
            { text: "Social Media voor Stukadoors", url: "/social-media-voor-stukadoors" },
            { text: "Reviews voor Stukadoors", url: "/reviews-voor-stukadoors" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
