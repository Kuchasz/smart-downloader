import './src/styles/main.scss';
import './src/views/index.html';

import {Observable} from 'rxjs';
import {createStore, combineReducers} from 'redux';
import {render} from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';

import {Accounts} from './src/ts/Data/Accounts';
import {Files} from './src/ts/Data/Files';

import {default as FileActions} from './src/ts/Actions/File';

import {AccountList} from './src/views/Accounts/AccountList';
import {FileList} from './src/views/Files/FileList';
import {FileControls} from './src/views/Files/FileControls';
import {Header} from './src/views/Header/Header';
import {PopupsContainer} from './src/views/Popups/PopupsContainer';

import {Files as FilesReducers} from './src/ts/Reducers/Files';

const reducers = combineReducers({files: FilesReducers});

const store = createStore(reducers);

render(
  <AccountList accounts={Accounts()}/>,
  document.getElementById('accounts-list')
);

render(
  <Provider store={store}>
    <FileList/>
  </Provider>,
  document.getElementById('files-list')
);

render(
  <Provider store={store}>
    <FileControls/>
  </Provider>,
  document.getElementById('files-controls')
);

render(
  <Header/>,
  document.getElementById('header')
);

const pushRandom = () => {
  const _timeout = Math.random()*2000;
  store.dispatch(FileActions.UpdateFiles());
  setTimeout(pushRandom, _timeout);
};

pushRandom();

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
