import './styles/main.scss';
import './views/index.html';

import {createStore, combineReducers} from 'redux';
import {render} from 'react-dom';
import * as React from 'react';
import {Provider} from 'react-redux';

import {createAccounts} from './Data/Accounts';

import {AccountList} from './views/Accounts/AccountList';
import {FileList} from './views/Files/FileList';
import {FileControls} from './views/Files/FileControls';
import {Header} from './views/Header/Header';

import {Files as FilesReducers} from './Reducers/Files';
import {applyMiddleware} from "redux";
import {socketActionMiddleware} from "../lib/redux-socket/SocketMiddleware";

import {connect} from 'socket.io-client';

const reducers = combineReducers({
	files: FilesReducers
});

const store = createStore(
	reducers,
	applyMiddleware(socketActionMiddleware(connect('http://localhost:8081')))
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