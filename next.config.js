/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    output: "standalone",
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'leonardo.osnova.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'strapi.marketdb.pro',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'new-retail.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'services.kontur.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'irecommend.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.shoppingcentreawards.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
