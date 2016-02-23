/**
 * Dado Gulp
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var localDynamo = require('local-dynamo');

gulp.task("admin-dev-server", function(callback) {
    // Start a webpack-dev-server
    var webpackConfig = require('./admin/webpack.config.js');
    var compiler = webpack( webpackConfig );
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('dev', ['admin-dev-server']);
