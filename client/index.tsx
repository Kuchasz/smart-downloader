import './src/styles/main.scss';
import './src/views/index.html';

import {createStore, combineReducers} from 'redux';
import {render} from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';

import {createAccounts} from './src/Data/Accounts';

import {AccountList} from './src/views/Accounts/AccountList';
import {FileList} from './src/views/Files/FileList';
import {FileControls} from './src/views/Files/FileControls';
import {Header} from './src/views/Header/Header';

import {Files as FilesReducers} from './src/Reducers/Files';
import {FileDownloads as FileDownloadsReducers} from './src/Reducers/FileDownloads';
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