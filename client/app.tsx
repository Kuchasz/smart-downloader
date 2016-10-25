import './src/styles/main.scss';
import './src/views/index.html';

import {createStore, combineReducers} from 'redux';
import {render} from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';
import * as io from 'socket.io-client';

import {createAccounts} from './src/ts/Data/Accounts';

import {fileActionCreators as fileActions} from './src/ts/Actions/File';

import {AccountList} from './src/views/Accounts/AccountList';
import {FileList} from './src/views/Files/FileList';
import {FileControls} from './src/views/Files/FileControls';
import {Header} from './src/views/Header/Header';

import {Files as FilesReducers} from './src/ts/Reducers/Files';
import {FileDownloads as FileDownloadsReducers} from './src/ts/Reducers/FileDownloads';
import {File, FileDownload} from "../domain/Files/Index";
import {applyMiddleware} from "redux";
import {scopedActionMiddleware} from "../communication/Middleware/ScopedActionMiddleware";

const reducers = combineReducers({
	files: FilesReducers,
	fileDownloads: FileDownloadsReducers
});

const store = createStore(
	reducers,
	applyMiddleware(scopedActionMiddleware('http://localhost:8081'))
);

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

// var ioo = io('http://localhost:8081');
//
// ioo.on('connect', ()=> {
// 	ioo.emit('download-file', {
// 		id: Math.floor(Math.random() * 1000),
// 		url: 'http://movietrailers.apple.com/movies/independent/neruda/neruda-trailer-1_h480p.mov'
// 	});
// });
//
// ioo.on('download-state', (state: { files: File[], fileDownloads: FileDownload[]})=> {
// 	const action = fileActions.createUpdateFilesAction(state.files, state.fileDownloads);
// 	store.dispatch(action);
// });
//
// setTimeout(()=> {
// 	ioo.emit('download-file', {
// 		id: Math.floor(Math.random() * 1000),
// 		url: 'http://movietrailers.apple.com/movies/independent/thehandmaiden/the-handmaiden-trailer-1_h480p.mov'
// 	});
// }, 2600);
//
// setTimeout(()=> {
// 	ioo.emit('download-file', {
// 		id: Math.floor(Math.random() * 1000),
// 		url: 'http://movietrailers.apple.com/movies/sony_pictures/resident-evil-the-final-chapter/resident-evil-the-final-chapter-trailer-3_h480p.mov'
// 	});
// }, 2700);