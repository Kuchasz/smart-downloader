import {Action} from 'redux';

export interface SocketAction extends Action {
    type: string;
    scope: ActionScope;
}

export enum ActionScope{
    Local,
    Remote,
    Both
};