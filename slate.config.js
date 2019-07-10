/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Base dirs for nestable paths
const sectionBase = 'core';
const snippetBase = 'core';

const plugins = [
  // Allow for nestable Sections & Snippets Dirs
  new CopyWebpackPlugin([
    {
      from: 'sections/**/*',
      to: '../sections/',
      flatten: true
    },
    {
      from: 'snippets/**/*',
      to: '../snippets/',
      flatten: true
    }
  ],
    { ignore: ['core/*'] }),
];

module.exports = {
  // See https://github.com/Shopify/slate/blob/master/packages/slate-config/common/paths.schema.js for path schema
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  'paths.theme.src.sections': `sections/${sectionBase}`,
  'paths.theme.src.snippets': `snippets/${snippetBase}`,
  'webpack.extend': {
    plugins,
    resolve: {
      alias: {
        // Add any theme specific path's here
        Utilities: path.resolve('./src/scripts/utilities'),
        jquery: path.resolve('./node_modules/jquery'),
      },
    },
  },
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }
  ]
};
