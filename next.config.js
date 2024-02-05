/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'leonardo.osnova.io',
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
