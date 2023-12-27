const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
 // publicPath: "/template/",
 
});
