# express_webpack
npm start 启动项目
npm run build 打包项目，js文件会放入pubilc/js, 图片放入public/img,css文件放入pubilc/css

express部分
webpack-dev-middleware：express中间件，启动服务时打包
webpack-hot-middleware：express中间件，实现打包热更新
connect-history-api-fallback：处理react-router使用browserHistory访问时出现cannot get /*** 的问题

babel-cli：处理es6语法兼容问题，可使用babel-node来启动服务，是nodejs支持import等es的语法；



webpack部分：
loader部分：
loader使用基本语法：
{
    test：/\.js$/,//以什么格式结尾作为匹配
    use:{
        use:['',''],//使用什么loader进行处理
        options:{

        }, //loader的配置
    }
}
babel-loader：处理es6语法兼容问题，通过配置可识别react组件和jsx语法，将其转换为es5语法，可在配置中的options属性中配置，亦可在根目录的.babelrc文件中配置，基本格式为"presets:['','']"
css-loader:处理css样式中的url路径，
style-loader：将样式集中处理并插入到头部的style标签中
file-loader：处理文件，可通过配置"?name=./img/[name].[ext]"来配置打包后的路径和引用


webpack插件：
ExtractTextPlugin：外部插件，需要安装，将样式导出为css文件格式如下，
{
    test:/\.css$/,
    use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:'css-loader'
    })
},
并通过在常见属性中配置输出文件名，如：new ExtractTextPlugin('./css/style.css'),

CommonsChunkPlugin：内部插件，将公共引用提取出来作为单独文件，
如：new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),

UglifyJsPlugin: 内部插件，将文件进行压缩，格式
如：new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}});

HotModuleReplacementPlugin: 内部插件，配合hot中间件使用，热更新相关
NoEmitOnErrorsPlugin：内部插件，可以保证出错时页面不阻塞，且会在编译结束后报错。

express中间件配置如下：
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

hot中间件需要在webpack配置文件的entry属性中引入hot组件的代理，如：
entry:['webpack-hot-middleware/client','./src/index.js'],并在plugins中引入热更新插件，

