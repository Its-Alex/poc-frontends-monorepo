const path = require('path');

const getYarnWorkspaces = require('get-yarn-workspaces');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['pdf'],
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    const packages = getYarnWorkspaces().map(name => {
      const currentDir = __dirname.split('/')

      if (name.includes(currentDir[currentDir.length - 2])) return null

      const packagePath = name.split('/')
      return `${packagePath[packagePath.length - 1]}/`
    }).filter(e => e)

    config.module.rules.forEach(r => {
      if (r.oneOf) {
        r.oneOf.forEach(o => {
          if (
            Array.isArray(o.include) &&
            typeof o.loader === 'string' &&
            o.loader.endsWith(path.join('node_modules', 'babel-loader', 'lib', 'index.js'))
          ) {
            console.log('Adding Lerna packages to babel-loader include:');
            o.include = packages.reduce(
              (acc, customPackage) => {
                const packagePath = path.resolve(__dirname, `../../${customPackage}`);
                console.log(`  * Added ${packagePath}`);
                acc.push(packagePath);
                return acc;
              },
              o.include
            );
          }
        });
      }
    });

    return config;
  },
};
