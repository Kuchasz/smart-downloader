import {Middleware, MiddlewareAPI, Dispatch, Action} from 'redux';

interface RemoteAction extends Action {
	isRemote: boolean;
}

interface State {
}

export const loggerMiddleware: Middleware =
	(store: MiddlewareAPI<State>) =>
		(next: Dispatch<State>) =>
			(action: RemoteAction): RemoteAction => {
				console.log(`Is action remote?: ${action.isRemote}`);
				//console.log('will dispatch', action);
				// Call the next dispatch method in the middleware chain.
				//const returnValue = next(action);
				//console.log('state after dispatch', store.getState());
				// This will likely be the action itself, unless
				// a middleware further in chain changed it.
				return next(action);
			};