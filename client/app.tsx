import './src/styles/main.scss';
import './src/views/index.html';

import {createStore, combineReducers} from 'redux';
import {render} from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';
import * as io from 'socket.io-client';

import {createAccounts} from './src/ts/Data/Accounts';

import {fileActionCreators as fileActions} from './src/ts/Actions/File';

import {AccountList} from './src/views/Accounts/AccountList';
import {FileList} from './src/views/Files/FileList';
import {FileControls} from './src/views/Files/FileControls';
import {Header} from './src/views/Header/Header';

import {Files as FilesReducers} from './src/ts/Reducers/Files';

const reducers = combineReducers({
  files: FilesReducers
});

const store = createStore(
	reducers);

render(
  <AccountList accounts={createAccounts()}/>,
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

var ioo = io('http://localhost:8081');

ioo.on('download-progress', (prog: { id: number, progress: number }) => {
	const action = fileActions.createUpdateFileProgressAction(prog.id, prog.progress);
  	store.dispatch(action);
});

ioo.on('download-start', (x: { id: number, url: string}) => {
	const action = fileActions.createAddFileAction(x.id, x.url);
	store.dispatch(action);
});

setTimeout(()=>{
  ioo.emit('download-file', {
    id: Math.floor(Math.random()*1000),
    url:   'http://movietrailers.apple.com/movies/independent/max-steel/max-steel-trailer-1_h1080p.mov'
    });
}, 2500);


setTimeout(()=>{
	ioo.emit('download-file', {
		id: Math.floor(Math.random()*1000),
		url:   'http://movietrailers.apple.com/movies/independent/max-steel/max-steel-trailer-1_h1080p.mov'
	});
}, 5000);


setTimeout(()=>{
	ioo.emit('download-file', {
		id: Math.floor(Math.random()*1000),
		url:   'http://movietrailers.apple.com/movies/independent/max-steel/max-steel-trailer-1_h1080p.mov'
	});
}, 7500);