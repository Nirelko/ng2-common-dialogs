import localResolve from 'rollup-plugin-local-resolve';

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngm.common.dialogs.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.ngm.common.dialogs.module',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/toPromise': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  },
  plugins: [localResolve()]
}