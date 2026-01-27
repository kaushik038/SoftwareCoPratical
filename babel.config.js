module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          AppSrc: './src',
          AppCompoments: './src/components',
          AppAssets: './src/assets',
          AppMpdules: './src/modules',
          AppRoutes: './src/navigations',
          AppApi: './src/services',
          AppTheme: './src/theme',
          AppUtils: './src/utils',
        },
      },
    ],
  ],
};
