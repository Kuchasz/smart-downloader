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
import {AccountList} from './src/views/Accounts/AccountList.jsx';
import {FileList} from './src/views/Files/FileList.jsx';
import {FileControls} from './src/views/Files/FileControls.jsx';
import {Header} from './src/views/Header/Header.jsx';

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

//progress finished waiting canceled

setInterval(()=>{
  const chickens = [{
    id: 0,
    nick: "Chickeno",
    daysLeft: Math.floor(Math.random()*30)+1,
    currentTransfer: Math.floor(Math.random()*100),
    maxTransfer: 100,
    registrationDate: "15.08.2015",
    endPremium: "31.08.2016",
    amountData: Math.floor(Math.random()*1000),
    color: "#22baa0"
  },
  {
    id: 1,
    nick: "Kuchasz",
    daysLeft: Math.floor(Math.random()*30)+1,
    currentTransfer: Math.floor(Math.random()*100),
    maxTransfer: "100",
    registrationDate: "10.06.2015",
    endPremium: "28.08.2016",
    amountData: Math.floor(Math.random()*1000),
    color: "#f14e69"
  }
];

const files = [{
  id: 0,
  fileName: 'another-brick-in-the-wall(anniversary-version).raw',
  status: 'progress',
  speed: parseFloat(Math.random()*10).toFixed(2),
  estimatedTime: '0:24:20',
  progress: Math.floor(Math.random()*100),
  selected: Math.random()>0.5,
  account: chickens[1]
},
{
  id: 1,
  fileName: 'mamma-mia-dvdrip-eurovision.mkv',
  status: 'finished',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 100,
  selected: Math.random()>0.5,
  account: chickens[0]
},
{
  id: 2,
  fileName: 'arhn-eu-nice_by_mikke22.mkv',
  status: 'waiting',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 0,
  selected: Math.random()>0.5,
  account: chickens[0]
},
{
  id: 3,
  fileName: 'promise-and-promise.mp4',
  status: 'canceled',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 23,
  selected: Math.random()>0.5,
  account: chickens[1]
},
{
  id: 4,
  fileName: 'herodThe-billionaire-midas.rar',
  status: 'progress',
  speed: parseFloat(Math.random()*10).toFixed(2),
  estimatedTime: '0:33:10',
  progress: Math.floor(Math.random()*100),
  selected: Math.random()>0.5,
  account: chickens[0]
}];

  ReactDOM.render(
    <AccountList accounts={chickens}/>,
    document.getElementById('accounts-list')
  );

  ReactDOM.render(
    <FileList files={files}/>,
    document.getElementById('files-list')
  );

  ReactDOM.render(
    <FileControls/>,
    document.getElementById('files-controls')
  );

  ReactDOM.render(
    <Header/>,
    document.getElementById('header')
  );


}, 1000);

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

// const render = () => {
//   let state = store.getState();
//   ReactDOM.render(<div><Headers/><Incrementer {...state}
//     rename={()=>store.dispatch({type: 'RENAME', name: 'Dory'})}
//     reage={()=>store.dispatch({type: 'REAGE', age: 22})}
//     note={()=>store.dispatch({type: 'SET_NOTE', val: 12})}
//     resubject={()=>store.dispatch({type: 'SET_SUBJECT', subject: 'Biology'})}
//     /></div>, document.querySelector('#incrementer'));
// };
//
// render();
// store.subscribe(render);

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
// const newBie = {
//   name: ko.observable('Julia'),
//   age: ko.observable(22),
//   randomNumber: ko.observable(0),
//   sex: ko.observable('female'),
//   url: ko.observable(),
//   filesProgress: ko.observableArray([]),
//   download: function(){
//     const _progress = {
//       id: Math.random(),
//       progress: ko.observable(0)
//     };
//     newBie.filesProgress.push(_progress);
//     ioo.emit('download-file', {url: newBie.url(), id: _progress.id})
//   }
// };
//
// ioo.on('download-progress', (progress)=>{
//   const _progress = newBie.filesProgress().find(p=>p.id == progress.id);
//   _progress.progress(progress.progress);
// });

// ko.applyBindings(newBie);
var account = ko.observableArray([
  {
    nick: "Chickeno",
    daysLeft: "31",
    currentTransfer: "80",
    maxTransfer: "100",
    registrationDate: "15.08.2015",
    endPremium: "31.08.2016",
    amountData: "310",
    color: "#22baa0"
  },
  {
    nick: "Kuchasz",
    daysLeft: "25",
    currentTransfer: "50",
    maxTransfer: "100",
    registrationDate: "10.06.2015",
    endPremium: "28.08.2016",
    amountData: "20",
    color: "#f14e69"
  },
  {
    nick: "Rumun",
    daysLeft: "31",
    currentTransfer: "95",
    maxTransfer: "200",
    registrationDate: "15.08.2015",
    endPremium: "31.08.2016",
    amountData: "310",
    color: "#f6d433"
  },
  {
    nick: "Kaligula",
    daysLeft: "25",
    currentTransfer: "20",
    maxTransfer: "150",
    registrationDate: "10.06.2015",
    endPremium: "28.08.2016",
    amountData: "20",
    color: "#7a6fbe"
  }
]);

ko.applyBindings({account});
