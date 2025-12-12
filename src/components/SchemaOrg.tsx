
interface SchemaOrgProps {
    store: {
        name: string;
        description?: string;
        telephone?: string;
        address: {
            streetAddress: string;
            addressLocality: string;
            addressRegion: string;
            addressCountry: string;
        };
        geo?: {
            latitude: number;
            longitude: number;
        };
        image?: string[];
        priceRange?: string;
    };
    faq?: { question: string; answer: string }[];
}

export function SchemaOrg({ store, faq }: SchemaOrgProps) {
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: store.name,
        description: store.description,
        address: {
            '@type': 'PostalAddress',
            streetAddress: store.address.streetAddress,
            addressLocality: store.address.addressLocality,
            addressRegion: store.address.addressRegion,
            addressCountry: 'KR',
        },
        geo: store.geo
            ? {
                '@type': 'GeoCoordinates',
                latitude: store.geo.latitude,
                longitude: store.geo.longitude,
            }
            : undefined,
        url: typeof window !== 'undefined' ? window.location.href : '',
        telephone: store.telephone,
        priceRange: store.priceRange || '₩',
    };

    const faqPage = faq
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        }
        : null;

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            {faqPage && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
                />
            )}
        </section>
    );
}
