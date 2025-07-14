const path = require('path');

/**
 * Custom plugin to maintain Jekyll URL structure
 */
module.exports = function (context, options) {
  return {
    name: 'jekyll-url-compatibility',
    
    async contentLoaded({ content, actions }) {
      const { addRoute } = actions;
      
      // Add custom routes that match Jekyll URL patterns
      const routes = [
        // Main site routes
        {
          path: '/',
          component: '@site/src/components/HomePage',
          exact: true,
        },
        // Add other custom routes as needed
      ];
      
      routes.forEach(route => {
        addRoute(route);
      });
    },
    
    configureWebpack(config, isServer) {
      return {
        resolve: {
          alias: {
            '@site': path.resolve(__dirname, '.'),
          },
        },
      };
    },
  };
};
