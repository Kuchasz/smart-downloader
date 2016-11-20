import {IAction} from "./IAction";
import {IActionResult} from "./IActionResult";
export interface IActionHandler<TAction extends IAction>{
    handle(action: TAction): IActionResult;
}