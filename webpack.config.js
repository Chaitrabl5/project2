const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { title } = require("process");

module.exports = {
mode: "development",
entry: {
main: path.resolve(__dirname, "./src/app.js"),
},
output: {
path: path.resolve(__dirname, "dist"),
filename: "main.js",
clean: true,
},
devServer:{
    static:"./dist"
},
plugins:[
    new HtmlWebpackPlugin({
    template:'./src/index.html',
    title:"Webpack Generated File see the console",
    inject: "body"
})

]
};