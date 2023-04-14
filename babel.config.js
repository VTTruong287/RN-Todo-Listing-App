module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['@babel/plugin-transform-flow-strip-types', { loose: true }], //https://github.com/facebook/react-native/issues/29084#issuecomment-1030732709
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            [
                'module:react-native-dotenv',
                {
                    envName: 'APP_ENV',
                    moduleName: '@env',
                    path: '.env',
                    safe: false,
                    allowUndefined: true,
                    verbose: false,
                },
            ],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
        ],
    };
};
