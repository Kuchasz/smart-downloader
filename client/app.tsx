import './src/styles/main.scss';
import './src/views/index.html';

import {Observable} from 'rxjs';
// Rx.Observable.from([0, 1, 2, 3])
//   .subscribe(x=>console.log(x));

// import 'rxjs/add/Observable';
// import { Observable } from 'rxjs/Observable';

// require<any>('rxjs/add/operator/from');

// Observable.from([0, 1, 2, 3, 4, 5])
//   .subscribe(v=>console.log(v));

// import {Accounts} from "./src/ts/Data/Accounts";
// import * as Rx from "rxjs";
// import * as io from "socket.io-client";
// import { render } from "react-dom";
// import * as React from 'react';
// import * as Redux from 'redux';
// import {Provider} from 'react-redux';
// Observable.fromEvent({}, 'adaw');

// var fff = Accounts();
//
// console.log(fff);

const clickerButton = document.querySelector('#button');
//
// Observable.from([0, 1, 2, 3, 4, 5])
//   .subscribe(x=>console.log(x));

Observable.fromEvent(clickerButton, 'click', (e: MouseEvent)=>{
  return {x: e.clientX, y: e.clientY};
}).subscribe(e=>console.log(e));

// Observable.fromEvent<MouseEvent, number>(clickerButton, 'click', (...args)=>{
//   console.log(args);
//   return 0;
// });

// Rxjs.Observable.fromEvent<number>(en, 'click', ())


// Rx.Observable.fromEvent<MouseEvent>(en, 'click');

// import {Accounts} from './src/js/Data/Accounts';
// import {Files} from './src/js/Data/Files';
//
// import {AccountList} from './src/views/Accounts/AccountList';
// import {FileList} from './src/views/Files/FileList';
// import {FileControls} from './src/views/Files/FileControls';
// import {Header} from './src/views/Header/Header';
// import {PopupsContainer} from './src/views/Popups/PopupsContainer';
//
// import {Files as FilesReducers} from './src/js/Reducers/Files';
//
// const reducers = combineReducers({files: FilesReducers});
//
// const store = createStore(reducers);
// console.log(store);
//
// ReactDOM.render(
//   <AccountList accounts={Accounts()}/>,
//   document.getElementById('accounts-list')
// );
//
// ReactDOM.render(
//   <Provider store={store}>
//     <FileList/>
//   </Provider>,
//   document.getElementById('files-list')
// );
//
// ReactDOM.render(
//   <Provider store={store}>
//     <FileControls/>
//   </Provider>,
//   document.getElementById('files-controls')
// );
//
// ReactDOM.render(
//   <Header/>,
//   document.getElementById('header')
// );


// store.subscribe(render);

// var ioo = io('http://localhost:3000');
// ioo.on('foo', (msg)=>console.log(msg));
// ioo.on('connect', ()=>console.log('connected!'));
//
// const iterator = fireUp();
// for(let i=0; i<5; i++)setTimeout(()=>newBie.name('Tiffany ' + iterator.next().value), 1000*i);
//
//     ioo.emit('download-file', {url: newBie.url(), id: _progress.id})
//
// ioo.on('download-progress', (progress)=>{
//   const _progress = newBie.filesProgress().find(p=>p.id == progress.id);
//   _progress.progress(progress.progress);
// });

// ko.applyBindings(newBie);
