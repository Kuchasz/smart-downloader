require('./src/styles/main.scss');
require('babel-polyfill');
import { Newbie } from './src/js/models/newbie';
import './src/views/index.html';
var ko = require('knockout');
var Rx = require('rxjs/Rx');
var io = require('socket.io-client');

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
// var map = new Map([['aa', 10],['bb', 20],['cc', 30],['dd', 40],['ee', 50]]);
// console.log(map);
//
// function* fireUp(){
//   yield 0;
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

var ioo = io('http://localhost:3000');
ioo.on('foo', (msg)=>console.log(msg));
ioo.on('connect', ()=>console.log('connected!'));

// const iterator = fireUp();
// for(let i=0; i<5; i++)setTimeout(()=>newBie.name('Tiffany ' + iterator.next().value), 1000*i);


const newBie = {
  name: ko.observable('Julia'),
  age: ko.observable(22),
  randomNumber: ko.observable(0),
  sex: ko.observable('female'),
  url: ko.observable(),
  progress: ko.observable(0),
  download: function(){
    ioo.emit('download-file', newBie.url())
  }
};

ioo.on('download-progress', (progress)=>{
  newBie.progress(progress);
});

ko.applyBindings(newBie);
