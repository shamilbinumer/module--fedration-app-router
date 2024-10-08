// main-app/next.config.js
import  NextFederationPlugin from '@module-federation/nextjs-mf';

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: {
          remote: `remote@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};