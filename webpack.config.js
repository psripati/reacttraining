// webpack ./Public/App/App.js ./Public/App/bundle.js
module.exports = {
    entry: './Public/App/App.jsx',
    output: {
        path: __dirname,
        filename: './Public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_module|bower_components)/
            }
        ]
    },       
    resolve: {
        root: __dirname,
        alias: {
            WeatherData: 'Public/App/WeatherComponent/WeatherData.jsx',
            Weather: 'Public/App/WeatherComponent/Weather.jsx',
            WeatherForm: 'Public/App/WeatherComponent/WeatherForm.jsx',
            WeatherApi: 'Public/App/Api/OpenWeatherMap.jsx',
            LocateUs: 'Public/App/WeatherComponent/LocateUs.jsx',
            Services: 'Public/App/WeatherComponent/Services.jsx',
            AboutUs: 'Public/App/WeatherComponent/AboutUs.jsx',
            Main: 'Public/App/WeatherComponent/Main.jsx',
            Navbar: 'Public/App/WeatherComponent/Navbar.jsx'
        },
        extension: ['', '.js', '.jsx']
    }
}