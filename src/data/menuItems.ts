import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Stukadoors", url: "/chatbot" },
            { text: "Voice AI voor Stukadoors", url: "/voice-ai" },
            { text: "SEO voor Stukadoors", url: "/seo" },
            { text: "Social Media voor Stukadoors", url: "/social-media" },
            { text: "Reviews voor Stukadoors", url: "/reviews" },
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
