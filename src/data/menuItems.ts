import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Huisartsen", url: "/chatbot-voor-huisartsen" },
            { text: "Voice AI voor Huisartsen", url: "/voice-ai-voor-huisartsen" },
            { text: "SEO voor Huisartsen", url: "/seo-voor-huisartsen" },
            { text: "Social Media voor Huisartsen", url: "/social-media-voor-huisartsen" },
            { text: "Reviews voor Huisartsen", url: "/reviews-voor-huisartsen" },
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
