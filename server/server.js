const express = require ('express');
const app = express();

app.use('/', require('connect-history-api-fallback')());

app.use(express.static('public'));

app.get('/', ( req, res) => {
    res.sendFile('index.html');
});

//配置webpack
if(process.env.NODE_ENV !== 'production'){
    //配置启动时打包
    const webpack = require ('webpack');
    const webpakConfig = require('../webpack.config.js');
    const webpackCompiled = webpack(webpakConfig);
    const webpackDevMiddleware = require('webpack-dev-middleware');

    app.use(webpackDevMiddleware(webpackCompiled,{
        publicPath:'/',
        stats: {colors:true},
        lazy:false,
        watchOptions: {
            aggregateTimeOut: 300,
            poll:true
        }
    }));
    //配置webpack热更新
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackCompiled));
}

const server = app.listen(3000, () => {
    const port = server.address().port;
    const address = server.address().address;
    console.log('服务运行在%s:%s', address, port);
    console.log(new Date());
})