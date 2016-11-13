import {IAction} from "./IAction";
export interface IActionHandler<TAction extends IAction>{
    handle(action: TAction): void;
}