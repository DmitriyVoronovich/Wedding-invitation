/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [ 'antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip' ],
    async rewrites() {
        return [
            {
                source: '/api/auth/:path*',
                destination: '/api/auth/:path*',
            },
            {
                source: '/api/data/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/data/:path*`,
            },
        ]
    }
}

module.exports = nextConfig
