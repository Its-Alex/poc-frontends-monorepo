const path = require('path');

const getYarnWorkspaces = require('get-yarn-workspaces');

const cracoIncludeLernaPackagePlugin = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const packages = pluginOptions.packages || [];
    webpackConfig.module.rules.forEach(r => {
      if (r.oneOf) {
        r.oneOf.forEach(o => {
          if (
            typeof o.include === 'string' &&
            typeof o.loader === 'string' &&
            o.loader.endsWith(path.join('node_modules', 'babel-loader', 'lib', 'index.js'))
            ) {
              console.log('Adding Lerna packages to babel-loader include:');
              o.include = packages.reduce(
                (acc, customPackage) => {
                  const packagePath = path.resolve(__dirname, `../${customPackage}`);
                  console.log(`  * Added ${packagePath}`);
                  acc.push(packagePath);
                  return acc;
                },
                [o.include]
            );
          }
        });
      }
    });

    return webpackConfig;
  },
}

module.exports = {
  plugins: [
    {
      plugin: cracoIncludeLernaPackagePlugin,
      options: {
        packages: getYarnWorkspaces().map(name => {
          const currentDir = __dirname.split('/')

          if (name.includes(currentDir[currentDir.length - 1])) return null

          const packagePath = name.split('/')
          return `${packagePath[packagePath.length - 1]}/`
        }).filter(e => e)
      },
    },
  ]
}