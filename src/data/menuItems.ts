import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Huisartsen", url: "/chatbot" },
            { text: "Voice AI voor Huisartsen", url: "/voice-ai" },
            { text: "SEO voor Huisartsen", url: "/seo" },
            { text: "Social Media voor Huisartsen", url: "/social-media" },
            { text: "Reviews voor Huisartsen", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Huisartsen", url: "/crm" },
            { text: "Automatisering voor Huisartsen", url: "/automatisering" },
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
