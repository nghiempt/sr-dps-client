/** @type {import('next').NextConfig} */

const semi = require('@douyinfe/semi-next').default();

const nextConfig = semi({
  // nextjs config
  i18n: {
    locales: ['vi-VN', 'en-US'],
    defaultLocale: 'vi-VN',
    localeDetection: false,
  },
});

module.exports = nextConfig;
