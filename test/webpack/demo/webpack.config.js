var path = require('path');
module.exports = {
    entry: './src/index.js', //main.js中的.js可以省略，前面的./不能省
    output:{
        path: './dist',
        filename:'bundle.js' // dist文件夹不存在时，会自动创建
    },

    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
}