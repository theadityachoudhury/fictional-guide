/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tailwindui.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: "img/logos/mark.svg?color=indigo&shade=600"
            },  
        ],
    },
};

export default nextConfig;
