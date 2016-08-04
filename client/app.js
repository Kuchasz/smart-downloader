import './src/styles/main.scss';
import 'babel-polyfill';
import { Newbie } from './src/js/models/newbie';
import './src/views/index.html';
import * as ko from 'knockout';

var newBie = new Newbie('John', 23);
var prom = new Promise((res)=>{
  setTimeout(()=>{
    newBie.name('Dory');
    res();
  }, 2500);
}).then(()=>setTimeout(()=>{
  newBie.age(24);
}, 2500));

ko.applyBindings(newBie);
