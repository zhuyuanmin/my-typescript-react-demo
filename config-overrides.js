const {
    override,
    fixBabelImports,
    addWebpackExternals,
    addWebpackAlias,
    addLessLoader,
} = require('customize-cra')
const path = require('path')
// 修改打包路径除了output，这里也要修改
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const myPlugin = [
    new UglifyJsPlugin({
        uglifyOptions: {
            warnings: false,
            compress: {
                drop_debugger: true,
                drop_console: true,
            },
        },
    }),
]

module.exports = override(
    fixBabelImports('import', {
        //配置按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackExternals({
        //不做打包处理配置，如直接以cdn引入的
        echarts: 'window.echarts',
        // highcharts:"window.highcharts"
    }),
    addWebpackAlias({
        //路径别名
        '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#1DA57A',
            },
        }
    }),
    config => {
        //暴露webpack的配置 config ,evn
        // 去掉打包生产map 文件
        // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
        if (process.env.NODE_ENV === 'production') config.devtool = false
        if (process.env.NODE_ENV !== 'development')
            config.plugins = [...config.plugins, ...myPlugin]
        //1.修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
        loaders[5].use.push({
            loader: 'sass-resources-loader',
            options: {
                resources: path.resolve(__dirname, 'src/asset/base.scss'), //全局引入公共的scss 文件
            },
        })

        //！ 这里尽量不要以赋值的方式覆盖原有配置
        config.output.path = path.resolve(__dirname, 'dist')
        config.output.filename = '[hash].[name].js'
        config.output.chunkFilename = 'static/js/[contenthash].[name].js'

        return config
    }
)