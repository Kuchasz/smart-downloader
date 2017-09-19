import {Action} from 'redux';
import {ActionScope} from "./ActionScope";

export interface SocketAction extends Action {
    scope?: ActionScope;
}