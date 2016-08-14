import './src/styles/main.scss';
import 'babel-polyfill';
import { Newbie } from './src/js/models/newbie';
import './src/views/index.html';
import * as ko from 'knockout';
import * as Rx from 'rxjs/Rx';
var io = require('socket.io-client');
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers} from 'redux';

import {Incrementer} from './src/views/Incrementer.jsx';

const {defaultPerson, defaultNote} = [{name: 'unnamed', age: 0}, {note: 0, subject: 'unnamed'}];

let person = (state = {}, action) => {
  switch (action.type) {
    case 'RENAME': return {...state, name: action.name};
    case 'REAGE': return {...state, age: action.age};
    default: return state;
  }
}

let noter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NOTE': return {...state, val: action.val};
    case 'SET_SUBJECT': return {...state, subject: action.subject};
    default: return state;
  }
}


const reducers = combineReducers({person, noter});
const store = createStore(reducers);

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
//
// const hooks = {
//   click: new Rx.Subject()
// };
//
// Rx.Observable.merge(
//   hooks.click
// ).subscribe((val)=>alert(`run!!: ${val}`));
//
// hooks.click.next(10);

const render = () => {
  let state = store.getState();
  ReactDOM.render(<Incrementer {...state}
    rename={()=>store.dispatch({type: 'RENAME', name: 'Dory'})}
    reage={()=>store.dispatch({type: 'REAGE', age: 22})}
    note={()=>store.dispatch({type: 'SET_NOTE', val: 12})}
    resubject={()=>store.dispatch({type: 'SET_SUBJECT', subject: 'Biology'})}
    />, document.querySelector('#incrementer'));
};

render();
store.subscribe(render);

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
//
// var ioo = io('http://localhost:3000');
// ioo.on('foo', (msg)=>console.log(msg));
// ioo.on('connect', ()=>console.log('connected!'));
//
// const iterator = fireUp();
// for(let i=0; i<5; i++)setTimeout(()=>newBie.name('Tiffany ' + iterator.next().value), 1000*i);
//
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
//
// ioo.on('download-progress', (progress)=>{
//   const _progress = newBie.filesProgress().find(p=>p.id == progress.id);
//   _progress.progress(progress.progress);
// });

ko.applyBindings(newBie);
