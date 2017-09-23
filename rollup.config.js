import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
var sass = require('node-sass');

export default {
  entry: 'index.ts',
  dest: 'dist/ngm-common-dialogs.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ngm-common-dialogs',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/add/observable/toPromise': 'Rx.Observable',
  },
  plugins: [ angular(
    {
      preprocessors:{
        template:template => template,
        style: scss => {
          let css = '';
          if (scss) {
            css = sass.renderSync({ data: scss }).css.toString();
          }
          
          return css;
        },
      }
    }
  ),
  typescript({
    typescript:require('typescript')
  }),
  resolve({
    module: true,
    main: true
  }),
  commonjs({
    include: 'node_modules/**',
  })
],
onwarn: warning => {
  const skip_codes = [
    'THIS_IS_UNDEFINED',
    'MISSING_GLOBAL_NAME'
  ];
  if (skip_codes.indexOf(warning.code) != -1) return;
  console.error(warning);
}
}