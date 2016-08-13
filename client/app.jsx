import './src/styles/main.scss';
import 'babel-polyfill';
import { Newbie } from './src/js/models/newbie';
import './src/views/index.html';
import * as ko from 'knockout';
import * as Rx from 'rxjs/Rx';
var io = require('socket.io-client');
import ReactDOM from 'react-dom';
import React from 'react';

import {Incrementer} from './src/views/Incrementer.jsx';

// Rx.Observable.interval(100).take(100).reduce((r, t)=>r+t, 0).subscribe(x=>console.log(x));
// var newBie = new Newbie('Mark', 23);
// var prom = new Promise((res)=>{
//   setTimeout(()=>{
//     newBie.name('Sunny');
//     res();
//   }, 2500);
// }).then(()=>setTimeout(()=>{
//   newBie.age(24);
// }, 2500));
//

const hooks = {
  click: new Rx.Subject()
};

Rx.Observable.merge(
  hooks.click
).subscribe((val)=>alert(`run!!: ${val}`));

hooks.click.next(10);

ReactDOM.render(<Incrementer val='ziomeczek'/>, document.querySelector('#incrementer'));

var map = new Map([['aa', 10],['bb', 20],['cc', 30],['dd', 40],['ee', 50]]);
console.log(map);

function* fireUp(){
  yield 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

var ioo = io('http://localhost:3000');
ioo.on('foo', (msg)=>console.log(msg));
ioo.on('connect', ()=>console.log('connected!'));

const iterator = fireUp();
for(let i=0; i<5; i++)setTimeout(()=>newBie.name('Tiffany ' + iterator.next().value), 1000*i);

const newBie = {
  name: ko.observable('Julia'),
  age: ko.observable(22),
  randomNumber: ko.observable(0),
  sex: ko.observable('female'),
  url: ko.observable(),
  filesProgress: ko.observableArray([]),
  download: function(){
    const _progress = {
      id: Math.random(),
      progress: ko.observable(0)
    };
    newBie.filesProgress.push(_progress);
    ioo.emit('download-file', {url: newBie.url(), id: _progress.id})
  }
};

ioo.on('download-progress', (progress)=>{
  const _progress = newBie.filesProgress().find(p=>p.id == progress.id);
  _progress.progress(progress.progress);
});

ko.applyBindings(newBie);
