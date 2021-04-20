import html from 'rollup-plugin-html2';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default  {
    input: './core/index.js',
    output: {
        file: './dist/app.js',
        format: 'umd',
        name: 'zm',
        banner: '/* ziming ' + new Date().toLocaleString() +  ' */'
    },
    plugins: [
        html({
            template: 'template/index.html',
            inject: 'head'
        }),
/*         getBabelOutputPlugin({
            presets: [['@babel/env', { modules: 'umd' }]],
            allowAllFormats: true
          }), */
        serve({
            open: true,
            contentBase: ['dist', 'static'],
            port: 10001
        }),
         livereload({
            watch: ['dist'],
            verbose: false, // Disable console output
        })
    ]
}