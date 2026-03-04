import { FiMessageSquare, FiCalendar, FiVideo, FiCamera, FiEdit3, FiShare2, FiMail, FiFileText, FiStar, FiBell, FiImage, FiPhoneMissed, FiLayout, FiPenTool, FiUsers, FiClipboard, FiSmartphone, FiCpu, FiTrendingUp, FiCheckCircle, FiLifeBuoy, FiClock, FiTarget, FiCoffee, FiThumbsUp, FiGlobe, FiPlayCircle, FiTool, FiShield, FiZap, FiAward, FiMapPin, FiLayers, FiRefreshCw, FiCreditCard, FiUserCheck, FiPieChart, FiInbox, FiBarChart2, FiLink } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    // 1. AI Telefoniste
    {
        title: "AI Telefoniste",
        tier: 'basis',
        description: "De medische spraakassistent die patiënten te woord staat volgens NHG-richtlijnen.",
        bullets: [
            {
                title: "Vloeiende Triage",
                description: "Vraagt direct naar urgentie en signaleert spoed volgens medische standaarden.",
                icon: <FiShield size={26} />
            },
            {
                title: "Patiëntgeheugen",
                description: "Herkent terugkerende patiënten en heeft direct inzicht in eerdere contacten.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Slimme Routing",
                description: "Verbindt direct door naar de assistente bij complexe zorgvragen.",
                icon: <FiZap size={26} />
            },
            {
                title: "Afspraken Planner",
                description: "Patiënten kunnen zelf hun afspraken plannen en verzetten via de AI-lijn.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Alles Inbegrepen",
                description: "Alle spraakfunctionaliteiten zijn standaard onderdeel van HuisartsenAI.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/voice-ai.png"
    },

    // 2. Social Media Planner
    {
        title: "Social Media Planner",
        tier: 'basis',
        description: "Houd uw patiënten op de hoogte via al uw digitale kanalen vanuit één dashboard.",
        bullets: [
            {
                title: "Patiëntencommunicatie",
                description: "Deel eenvoudig nieuws over de praktijk, vaccinaties of openingstijden.",
                icon: <FiShare2 size={26} />
            },
            {
                title: "Automatisering",
                description: "Plan herinneringen voor belangrijke gezondheidsthema's vooruit.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Cross-Platform",
                description: "Beheer Facebook, Instagram en LinkedIn tegelijk vanuit één scherm.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Gratis Inbegrepen",
                description: "Standaard onderdeel om de verbinding met uw patiënten te versterken.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/social-media.png"
    },

    // 3. Reputatie Manager
    {
        title: "Reputatie Manager",
        tier: 'basis',
        description: "Automatiseer het verzamelen van waardevolle feedback en verbeter uw online reputatie.",
        bullets: [
            {
                title: "Feedback Automatisering",
                description: "Verstuurt automatisch uitnodigingen voor patiëntwaarderingen na contact.",
                icon: <FiStar size={26} />
            },
            {
                title: "Review Widget",
                description: "Toont uw laatste 5-sterren waarderingen direct op de openingspagina.",
                icon: <FiLayout size={26} />
            },
            {
                title: "Vindbaarheid",
                description: "Goede waarderingen zorgen voor een sterke positie in Google Maps.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Vertrouwen",
                description: "Bouw aan een vertrouwd en kwalitatief imago voor uw praktijk.",
                icon: <FiThumbsUp size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/review-manager.png"
    },

    // 4. Factuur AI & Sales Deck AI
    {
        title: "Factuur AI & Sales Deck AI",
        tier: 'basis',
        description: "Creëer professionele facturen en medische presentaties binnen enkele minuten.",
        bullets: [
            {
                title: "Slimme Facturatie",
                description: "Snel en foutloos factureren voor niet-verzekerde zorg of passanten.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Presentatie AI",
                description: "Maak in een handomdraai visuele presentaties over uw praktijk en diensten.",
                icon: <FiImage size={26} />
            },
            {
                title: "Online Betalingen",
                description: "Patiënten kunnen direct via iDEAL betalen voor administratieve snelheid.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Sneller Betaald",
                description: "Minder rompslomp met papieren facturen en snellere afhandeling.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/factuur.png",
        videoSrc: "/videos/benefits/sales-deck-ai.mp4"
    },

    // 5. Afspraak Herinneringen
    {
        title: "Afspraak Herinneringen",
        tier: 'basis',
        description: "Voorkom no-shows en optimaliseer uw spreekuur met automatische reminders.",
        bullets: [
            {
                title: "SMS & Email",
                description: "Bevestigingen en herinneringen via het kanaal van voorkeur van de patiënt.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "Sequenties",
                description: "Standaard herinneringen op 24 uur en 2 uur voor aanvang van het consult.",
                icon: <FiClock size={26} />
            },
            {
                title: "Wachtlijst Beheer",
                description: "Bij annulering kan de AI direct een patiënt van de wachtlijst benaderen.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Optimale Flow",
                description: "Een strakkere planning zorgt voor minder wachttijd in de praktijk.",
                icon: <FiRefreshCw size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/reminder.png"
    },

    // 6. Gemiste Oproep Service
    {
        title: "Gemiste Oproep Service",
        tier: 'basis',
        description: "Zorg dat geen enkele zorgvraag onbeantwoord blijft, ook niet bij extreme drukte.",
        bullets: [
            {
                title: "SMS Terugbel",
                description: "Stuurt direct een SMS als de lijn bezet is om de patiënt gerust te stellen.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Zorgcontinuïteit",
                description: "Bied direct een alternatief aan zoals de chatbot of de spoedlijn.",
                icon: <FiLifeBuoy size={26} />
            },
            {
                title: "Piekuropvang",
                description: "Ideaal voor de drukke maandagochtend: nooit meer een 'ingesprektoon'.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Patiënttevredenheid",
                description: "Directe respons verlaagt de drempel en verhoogt het vertrouwen.",
                icon: <FiThumbsUp size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/missed-call.png"
    },

    // 7. Slimme Website Chat
    {
        title: "Slimme Website Chat",
        tier: 'basis',
        description: "Beantwoord veelgestelde vragen automatisch en screen patiënten via uw website.",
        bullets: [
            {
                title: "Medische Kennisbank",
                description: "Antwoordt op basis van Thuisarts.nl of uw eigen praktijkinformatie.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Triage Chat",
                description: "Vangt de eerste gegevens op en bepaalt de urgentie van de klacht.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Volledig Veilig",
                description: "AVG-compliant chat met versleutelde gegevensuitwisseling.",
                icon: <FiShield size={26} />
            },
            {
                title: "Altijd Bereikbaar",
                description: "Uw assistent die nooit slaapt, ook in de avond en het weekend.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/chatbot.png"
    },

    // 8. Workflow Automatisering
    {
        title: "Workflow Automatisering",
        tier: 'basis',
        description: "Het digitale brein dat al uw systemen verbindt voor een vlekkeloze flow.",
        bullets: [
            {
                title: "HIS Koppeling",
                description: "Synchroniseer automatisch gegevens met uw Huisarts Informatie Systeem.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Herhaalrecepten Flex",
                description: "Automatische processen voor recepten en apotheeknotificaties.",
                icon: <FiZap size={26} />
            },
            {
                title: "Data Veiligheid",
                description: "Strikte medische protocollen voor veilige gegevensuitwisseling.",
                icon: <FiShield size={26} />
            },
            {
                title: "Efficiëntie Boost",
                description: "Bespaar uren werk door repetitieve praktijktaken te automatiseren.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/workflows.png"
    },

    // 9. SEO Tekstschrijver
    {
        title: "SEO Tekstschrijver",
        tier: 'basis',
        description: "Genereert medisch relevante content die hoog scoort in de lokale zoekresultaten.",
        bullets: [
            {
                title: "Medische Blogs",
                description: "AI-gestuurde artikelen over gezondheid, preventie en praktijknieuws.",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Lokale SEO",
                description: "Word de best vindbare huisartsenpraktijk in uw regio of wijk.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Auto-Publish",
                description: "Plaatst de content direct op uw website na uw goedkeuring.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Autoriteit",
                description: "Bouw online expertise op en informeer uw patiënten proactief.",
                icon: <FiTrendingUp size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/seo-editor.png",
        videoSrc: "/videos/benefits/seo-blog-writer.mp4"
    },

    // 10. Social Media Content
    {
        title: "Social Media Content",
        tier: 'basis',
        description: "Creëert professionele visuals en captions voor een sterke online aanwezigheid.",
        bullets: [
            {
                title: "Praktijk Visibiliteit",
                description: "Toon de menselijke kant van uw praktijk met hoogwaardige content.",
                icon: <FiImage size={26} />
            },
            {
                title: "Patiënteninformatie",
                description: "Deel tips en updates op een visueel aantrekkelijke manier.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Video Content",
                description: "Genereer korte voorlichtingsvideo's voor social media.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Content Machine",
                description: "Nooit meer zonder relevante berichten voor uw patiënten.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/social-media.png",
        videoSrc: "/videos/benefits/reclame-ai.mp4"
    },

    // 11. Offertes & Contracten
    {
        title: "Offertes & Contracten",
        tier: 'basis',
        description: "Automatiseer administratieve afhandeling voor behandelingen en zorgovereenkomsten.",
        bullets: [
            {
                title: "Digitale Handtekening",
                description: "Snel en veilig akkoord op behandelplannen of contracten.",
                icon: <FiPenTool size={26} />
            },
            {
                title: "Behandeloverzichten",
                description: "Duidelijke, visuele overzichten van voorgestelde zorgtrajecten.",
                icon: <FiLayout size={26} />
            },
            {
                title: "Kostenramingen",
                description: "Geef patiënten direct inzicht in eventuele eigen bijdragen.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Conversie",
                description: "Professionaliseer het contact buiten de standaard verzekerde zorg.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/factuur.png"
    },

    // 12. AI Email Assistent
    {
        title: "AI Email Assistent",
        tier: 'basis',
        description: "De slimme assistent die uw praktijkmail filtert en herkent wat prioriteit heeft.",
        bullets: [
            {
                title: "Prioriteiten Stellen",
                description: "Herken direct medische urgentie in inkomende e-mails.",
                icon: <FiShield size={26} />
            },
            {
                title: "Concept Antwoorden",
                description: "Zet automatisch een concept klaar om tijd te besparen bij de balie.",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Workflow Triggers",
                description: "Start automatisch acties op basis van de inhoud van een mail.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Tijdbesparing",
                description: "Besteed minder tijd aan het handmatig labelen van de inbox.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/email-automation.png"
    },

    // 13. Centrale Inbox
    {
        title: "Centrale Inbox",
        tier: 'basis',
        description: "Al uw communicatiekanalen veilig op één plek voor het hele team.",
        bullets: [
            {
                title: "Omnichannel",
                description: "Beheer Email, SMS en Chat vanuit één overzichtelijk dashboard.",
                icon: <FiInbox size={26} />
            },
            {
                title: "Team Assign",
                description: "Wijs gesprekken toe aan de juiste assistent of arts.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Mobile App",
                description: "Blijf op de hoogte van belangrijke berichten via de praktijk app.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Zero Missed",
                description: "Vergeet nooit meer een reactie op een patiëntenvraag.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/inbox.png"
    },

    // 14. Advertentie Dashboard
    {
        title: "Advertentie Dashboard",
        tier: 'basis',
        description: "Meet de resultaten van uw online campagnes en praktijkvindbaarheid.",
        bullets: [
            {
                title: "Google Sync",
                description: "Real-time inzicht in uw Google Business Profile en advertenties.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Lead Tracking",
                description: "Zie precies welke kanalen zorgen voor nieuwe patiënten.",
                icon: <FiTarget size={26} />
            },
            {
                title: "ROI Monitor",
                description: "Krijg grip op uw marketingbudget en zie het effect op ramingen.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Dashboarding",
                description: "Alle data overzichtelijk in één visueel krachtig dashboard.",
                icon: <FiBarChart2 size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/ads-dashboard.png"
    },

    // 15. Websites & Funnels
    {
        title: "Websites & Funnels",
        tier: 'basis',
        description: "Moderne praktijkwebsites die patiënten helpen bij het vinden van de juiste weg.",
        bullets: [
            {
                title: "Patiëntvriendelijk",
                description: "Design gericht op gebruiksgemak voor jong en oud.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Landing Pages",
                description: "Specifieke pagina's voor vaccinaties, spreekuur of nieuwe patiënten.",
                icon: <FiLayout size={26} />
            },
            {
                title: "Snelheid",
                description: "Geen laadtijden meer, een soepele ervaring op elk apparaat.",
                icon: <FiZap size={26} />
            },
            {
                title: "Beheer",
                description: "Pas zelf eenvoudig openingstijden of praktijknieuws aan.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/funnel.png"
    },

    // 16. Klantrelatiebeheer
    {
        title: "Klantrelatiebeheer",
        tier: 'basis',
        description: "Beheer relaties met patiënten en zorgpartners in een flexibel CRM.",
        bullets: [
            {
                title: "Populatie Beheer",
                description: "Segmenteer uw patiëntenbestand op basis van zorgprofielen.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Historie",
                description: "Een complete tijdlijn van elk contactmoment en elke afspraak.",
                icon: <FiClock size={26} />
            },
            {
                title: "Taken & Follow-up",
                description: "Wijs taken toe aan teamleden voor administratieve opvolging.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Relatie Focus",
                description: "Verbeter de binding met uw patiënten door proactief contact.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/klantrelatiebeheer.png"
    },

    // 17. AI Fotostudio
    {
        title: "AI Fotostudio",
        tier: 'basis',
        description: "Genereer realistische beelden voor uw praktijkvoorlichting en website.",
        bullets: [
            {
                title: "Medische Visuals",
                description: "Creëer passend beeldmateriaal zonder dure fotoshoots.",
                icon: <FiImage size={26} />
            },
            {
                title: "Top Kwaliteit",
                description: "Hyper-realistische beelden die de juiste sfeer uitstralen.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Rechtenvrij",
                description: "Alle gegenereerde beelden zijn uw eigendom om te gebruiken.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Snelheid",
                description: "Direct resultaat voor uw presentaties of social media posts.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],
        videoSrc: "/videos/benefits/photo-ai.mp4"
    },

    // 18. Zakelijke Videoproductie
    {
        title: "Zakelijke Videoproductie",
        tier: 'basis',
        description: "Maak cinematische instructievideo's en praktijkupdates voor uw patiënten.",
        bullets: [
            {
                title: "Voorlichting",
                description: "Leg complexe zorgvragen uit in duidelijke, bewegende beelden.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Image-to-Video",
                description: "Breng praktijkfoto's tot leven voor meer engagement.",
                icon: <FiImage size={26} />
            },
            {
                title: "High Definition",
                description: "Professionele kwaliteit voor uw wachtkamer of website.",
                icon: <FiAward size={26} />
            },
            {
                title: "Innovatie",
                description: "Loop voorop in de zorg met moderne communicatiemiddelen.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        videoSrc: "/videos/benefits/video-ai.mp4"
    },

    // 19. SEO Editor (Pro)
    {
        title: "SEO Editor (Pro)",
        tier: 'pro',
        description: "Geavanceerde editor voor het optimaliseren van uw medische content.",
        bullets: [
            {
                title: "One-Click Scan",
                description: "Scan en verbeter uw teksten direct voor betere vindbaarheid.",
                icon: <FiZap size={26} />
            },
            {
                title: "Internal Links",
                description: "Plaatst automatisch slimme links naar andere medische pagina's.",
                icon: <FiLink size={26} />
            },
            {
                title: "Real-time Feedback",
                description: "Direct inzicht in hoe uw tekst presteert in Google.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Professioneel",
                description: "De krachtigste tool voor de serieuze online praktijk.",
                icon: <FiAward size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/seo-editor.png"
    },

    // 20. Elite Managed Service
    {
        title: "Elite Managed Service",
        tier: 'elite',
        description: "Volledige ontzorging: wij bouwen en onderhouden uw volledige AI-praktijk.",
        bullets: [
            {
                title: "Strategie",
                description: "Wij denken mee over nieuwe kansen voor uw praktijkautomatisering.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Volledig Beheer",
                description: "Al uw flows, chatbots en telefonie-instellingen door ons beheerd.",
                icon: <FiTool size={26} />
            },
            {
                title: "Maatwerk",
                description: "Koppelingen met specialistische HIS of andere zorgapps mogelijk.",
                icon: <FiLink size={26} />
            },
            {
                title: "Focus op Zorg",
                description: "Jij doet het werk als huisarts, wij regelen de rest.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/managed-service.png"
    }
]