const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config');


module.exports = function (config, env) {
    let extendedDefaultConfig = genDefaultConfig(config, env);

    // Make whatever fine-grained changes you need
    extendedDefaultConfig.module.rules.push(
        {
            test: /\.css$/,
            use: [
                'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            ]
        }
    );
    return extendedDefaultConfig;
};