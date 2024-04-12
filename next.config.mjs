/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
        port: '',
        protocol: 'https'
      }
    ]
  },
  reactStrictMode: true
};

export default nextConfig;
