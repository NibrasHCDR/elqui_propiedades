/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        }
      ],
      domains: ['i.postimg.cc' , 'photos.app.goo.gl'],// Agrega el dominio de tus imágenes aquí
    },

    experimental: {
      appDir: true,
    },
    // ... otras configuraciones de Next.js
  };
  
  module.exports = {
    reactStrictMode: true,
    ...nextConfig
  };