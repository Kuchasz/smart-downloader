import './src/styles/main.scss';
import 'babel-polyfill';
import './src/views/index.html';
import * as Rx from 'rxjs/Rx';
var io = require('socket.io-client');
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers} from 'redux';

import {Accounts} from './src/js/Data/Accounts.js';
import {Files} from './src/js/Data/Files.js';

import {AccountList} from './src/views/Accounts/AccountList.jsx';
import {FileList} from './src/views/Files/FileList.jsx';
import {FileControls} from './src/views/Files/FileControls.jsx';
import {Header} from './src/views/Header/Header.jsx';
import {PopupsContainer} from './src/views/Popups/PopupsContainer.jsx';

setInterval(()=>{

  ReactDOM.render(
    <AccountList accounts={Accounts()}/>,
    document.getElementById('accounts-list')
  );

  ReactDOM.render(
    <FileList files={Files()}/>,
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
