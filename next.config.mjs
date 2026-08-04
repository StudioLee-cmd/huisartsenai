/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/praktijkmanager-huisartsenpraktijk-rol-salaris-taken', destination: '/', permanent: true },
            { source: '/blog/b2b-keuringen-mkb-werkgevers-huisartsenpraktijk-samenwerkingen', destination: '/', permanent: true },
            { source: '/blog/slaapproblemen-traject-huisartsenpraktijk', destination: '/', permanent: true },
            { source: '/blog/kraamzorg-overdracht-huisartsenpraktijk-traject', destination: '/', permanent: true },
            { source: '/blog/hypertensie-thuismeten-huisarts-protocol-his-flow', destination: '/', permanent: true },
            { source: '/blog/poh-ggz-aannemen-huisartsenpraktijk-2026', destination: '/', permanent: true },
            { source: '/blog/eigen-risico-uitleggen-patienten-huisarts', destination: '/', permanent: true },
            { source: '/blog/chatgpt-nieuwe-huisarts', destination: '/', permanent: true },
            { source: '/blog/digitale-triage-huisartsenpraktijk-werking', destination: '/blog/digitale-triage-huisarts-4-modellen-2026', permanent: true },
            { source: '/blog/digitale-triage-huisartsenpraktijk', destination: '/blog/digitale-triage-huisarts-4-modellen-2026', permanent: true },
            { source: '/blog/no-shows-huisartsenpraktijk-verminderen-ai', destination: '/blog/no-shows-huisartsenpraktijk-voorkomen', permanent: true },
            { source: '/blog/no-shows-huisartsenpraktijk-minder-gemist', destination: '/blog/no-shows-huisartsenpraktijk-voorkomen', permanent: true },
            { source: '/blog/no-shows-huisarts-verlagen-strategie', destination: '/blog/no-shows-huisartsenpraktijk-voorkomen', permanent: true },
            { source: '/blog/online-vindbaarheid-huisartsenpraktijk', destination: '/blog/huisarts-online-vindbaar-nieuwe-patienten', permanent: true },
            { source: '/blog/huisarts-vindbaarheid-online', destination: '/blog/huisarts-online-vindbaar-nieuwe-patienten', permanent: true },
            { source: '/blog/google-bedrijfsprofiel-huisarts-nieuwe-patienten', destination: '/blog/google-bedrijfsprofiel-huisarts', permanent: true },
            { source: '/blog/telefoon-druk-huisartsenpraktijk-verlagen', destination: '/blog/telefoondruk-huisartsenpraktijk-verlagen', permanent: true },
            { source: '/blog/reviews-automatiseren-huisartsenpraktijk', destination: '/blog/meer-google-reviews-huisartsenpraktijk', permanent: true },
            { source: '/blog/huisarts-online-vindbaar-nieuwe-patienten', destination: '/blog/nieuwe-patienten-werven-huisarts-online', permanent: true },
            { source: '/blog/klanttevredenheid-huisarts', destination: '/blog/klanttevredenheid-huisartsenpraktijk-verbeteren', permanent: true },
        ];
    },
};

export default nextConfig;
