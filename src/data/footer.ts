
import { publicContacts } from "@/data/publicContacts";
import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    services: IMenuItem[];
    guides: IMenuItem[];
    general: IMenuItem[];
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op de zorg, wij op de rest. Wij regelen je telefoontjes, planning en marketing, zodat jij kunt doen waar je goed in bent.",
    services: [
        { text: "Chatbot voor Huisartsen", url: "/chatbot" },
        { text: "Voice AI voor Huisartsen", url: "/voice-ai" },
        { text: "SEO voor Huisartsen", url: "/seo" },
        { text: "Social Media voor Huisartsen", url: "/social-media" },
        { text: "Reviews voor Huisartsen", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" },
        { text: "CRM voor Huisartsen", url: "/crm" },
        { text: "Automatisering voor Huisartsen", url: "/automatisering" },
    ],
    guides: [
        { text: "Software voor huisartsenpraktijken", url: "/blog/software-huisartsenpraktijk-his-triage-ai-overzicht" },
        { text: "Beste HIS-systeem 2026", url: "/blog/beste-his-systeem-2026" },
        { text: "Digitale triage: 4 modellen", url: "/blog/digitale-triage-huisarts-4-modellen-2026" },
        { text: "No-show-protocol: 3 modellen", url: "/blog/no-show-protocol-huisartsenpraktijk-3-modellen" },
    ],
    general: [
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "14 Dagen Voor €1", url: "/free-trial" },
        { text: "Gratis Website", url: "/gratis-website" },
        { text: "Blog", url: "/blog" },
    ],
    quickLinks: [
        { text: "Chatbot voor Huisartsen", url: "/chatbot" },
        { text: "Voice AI voor Huisartsen", url: "/voice-ai" },
        { text: "SEO voor Huisartsen", url: "/seo" },
        { text: "Social Media voor Huisartsen", url: "/social-media" },
        { text: "Reviews voor Huisartsen", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" },
        { text: "CRM voor Huisartsen", url: "/crm" },
        { text: "Automatisering voor Huisartsen", url: "/automatisering" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Gratis Website", url: "/gratis-website" },
        { text: "Blog", url: "/blog" },
    ],
    email: publicContacts.primary.email,
    telephone: '+31612345678',
    socials: {
        youtube: 'https://www.youtube.com/@DIGITAL.STUDIOLEE',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}
