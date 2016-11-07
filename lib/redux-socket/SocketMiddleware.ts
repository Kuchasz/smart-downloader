import {MiddlewareAPI, Dispatch} from 'redux';
import {SocketAction} from "./SocketAction";
import {Socket} from "./Socket";
import {ActionScope} from "./ActionScope";

interface State {
}

export const socketActionMiddleware =
    (socket: Socket) => {
        let subscribed: boolean = false;
        return (store: MiddlewareAPI<State>) =>
            (next: Dispatch<State>) =>
                (action: SocketAction): SocketAction => {
                    if (!subscribed) {
                        subscribed = true;
                        socket.on('message', (a: SocketAction)=> {
                            store.dispatch(Object.assign({}, a, {scope: ActionScope.Local}));
                        });
                    }
                    if (action.scope === ActionScope.Local) return next(action)
                    else if (action.scope === ActionScope.Remote)
                        socket.send(action)
                    else if (action.scope === ActionScope.Both) {
                        socket.send(action);
                        return next(action);
                    } else return next(action);
                };
    };