/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    transpilePackages: [ 'antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip' ]
}

module.exports = nextConfig
