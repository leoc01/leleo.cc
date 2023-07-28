/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
