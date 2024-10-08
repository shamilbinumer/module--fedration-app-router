// remote-app/next.config.js
import  NextFederationPlugin from '@module-federation/nextjs-mf';


export default  {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'about',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './About': './components/About.js',
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
