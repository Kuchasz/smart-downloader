import './src/styles/main.scss';
import 'babel-polyfill';
import { Newbie } from './src/js/models/newbie';
import './src/views/index.html';
import * as ko from 'knockout';
var Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(100).reduce((r, t)=>r+t, 0).subscribe(x=>console.log(x));


var newBie = new Newbie('John', 23);
var prom = new Promise((res)=>{
  setTimeout(()=>{
    newBie.name('Dory');
    res();
  }, 2500);
}).then(()=>setTimeout(()=>{
  newBie.age(24);
}, 2500));

var map = new Map([['aa', 10],['bb', 20],['cc', 30],['dd', 40],['ee', 50]]);
console.log(map);

function* fireUp(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const iterator = fireUp();
for(let i=0; i<10; i++)console.log(iterator.next());

ko.applyBindings(newBie);
