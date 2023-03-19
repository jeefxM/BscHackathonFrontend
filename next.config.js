module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the noParse option to the webpack configuration
    config.module.noParse = /gun\.js$/;

    return config;
  },
};
