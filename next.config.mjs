/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net'],
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: '/formularz',
                destination: '/kontakt',
                permanent: true
            },
            {
                source: '/opinie',
                destination: '/',
                permanent: true,
            },
            {
                source: '/galeria',
                destination: '/',
                permanent: true,
            },
            {
                source: '/jak-to-dziala',
                destination: '/',
                permanent: true,
            },
            {
                source: '/weryfikacja-samochodu',
                destination: '/co-sprawdzam',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
