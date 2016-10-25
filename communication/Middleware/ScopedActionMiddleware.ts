import {Middleware, MiddlewareAPI, Dispatch} from 'redux';
import * as io from 'socket.io-client';
import {Action, ActionScope} from "../Actions/Action";

interface State {
}

export const scopedActionMiddleware =
	(remoteServer: string) => {
		const ioClient = io('http://localhost:8081');

		return (store: MiddlewareAPI<State>) =>
			(next: Dispatch<State>) =>
				(action: Action): Action => {
					if (action.executionMode === ActionScope.Local) return next(action);
					if (action.executionMode === ActionScope.Remote) ioClient.send(action);
					if (action.executionMode === ActionScope.Both) {
						ioClient.send(action);
						return next(action);
					}
					// console.log(`Is action remote?: ${action.executionMode}`);
					return next(action);
				};
	};