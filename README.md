Running `npm run build` produces the following issue.

```bash
npm run build

> rx_test@1.0.0 build /Users/mrussell/Projects/rx_test
> tsc --allowJs -m system --moduleResolution node main.js --outFile main-dist.js

node_modules/rxjs-es/Observable.d.ts(10,66): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/Observable.d.ts(66,60): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/Observable.d.ts(66,70): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/observable/PromiseObservable.d.ts(40,31): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/observable/PromiseObservable.d.ts(41,26): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/operator/toPromise.d.ts(7,59): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/operator/toPromise.d.ts(7,69): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/operator/toPromise.d.ts(9,9): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/operator/toPromise.d.ts(10,26): error TS2304: Cannot find name 'Promise'.
node_modules/rxjs-es/operator/toPromise.d.ts(10,36): error TS2304: Cannot find name 'Promise'.
```