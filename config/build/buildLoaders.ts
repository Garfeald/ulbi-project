import {RuleSetRule} from "webpack";

export function buildLoaders(): Array<RuleSetRule> {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
    ]
}