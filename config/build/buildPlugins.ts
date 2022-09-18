import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import * as webpack from "webpack";
import {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): Array<WebpackPluginInstance> {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}