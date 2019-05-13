module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins:['@babel/plugin-proposal-class-properties'],
};

// @babel/react  to transform the JSX
// @babel/env for us to safely use modern JavaScript features
// and not worry about browsers that do not understand them.

// plug needed to enable the use of the new class fields syntax in classes
