// Custom plugin to suppress VFileMessage serialization warnings
const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'suppress-cache-warnings',
    configureWebpack(config, isServer) {
      // Disable filesystem cache to avoid VFileMessage serialization issues
      if (config.cache && config.cache.type === 'filesystem') {
        // Disable cache or use memory cache instead
        config.cache = {
          type: 'memory'
        };
      }
      
      // Add ignore warnings for VFileMessage serialization
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        /Serializing big strings/,
        /VFileMessage/,
        /Failed to serialize/,
        {
          module: /node_modules\/vfile/,
        },
        {
          message: /Serializing big strings/,
        }
      ];
      
      // Set infrastructure logging to suppress cache warnings
      config.infrastructureLogging = {
        level: 'error', // Only show errors, not warnings
        appendOnly: true,
      };
      
      return config;
    },
  };
};
