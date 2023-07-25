/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false // Soluciona el problema del "Module not found: Can't resolve 'fs'"
      };
    }
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]' // Ruta y nombre para el video en la carpeta dist
        }
      }
    });

    return config;
  }
});
