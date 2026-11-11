import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// One card that leads an article reader to the free scan, the site's lead route.
// The utm values let the host's visitor count tell which card a scan visit came from.
interface BlogScanCtaProps {
    slug: string;
    place: 'midden' | 'einde';
}

export default function BlogScanCta({ slug, place }: BlogScanCtaProps) {
    const href = `/gratis-scan?utm_source=blog&utm_medium=artikel-kaart&utm_campaign=artikel-scan&utm_content=${place}-${slug}`;
    return (
        <aside
            aria-label="Gratis scan voor je praktijk"
            data-cta="artikel-scan"
            className="my-12 rounded-2xl border border-[var(--card-border)] bg-[var(--hero-background)] p-6 md:p-8"
        >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)] mb-2">Gratis scan</p>
            <p className="text-xl md:text-2xl font-bold text-[var(--foreground)] leading-snug mb-3">
                Hoe goed doet de website van jouw praktijk het?
            </p>
            <p className="text-base text-[var(--foreground-accent)] leading-relaxed mb-6">
                Je krijgt een cijfer op vier onderdelen: vindbaarheid in Google, conversie, vindbaarheid in AI-zoekmachines en de lokale signalen op je pagina. Met de belangrijkste verbeterpunten en één verbetering die je vandaag zelf doorvoert.
            </p>
            <Link
                href={href}
                className="inline-flex items-center gap-2 text-black bg-primary hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors"
            >
                Start de gratis scan
                <FiArrowRight />
            </Link>
        </aside>
    );
}
