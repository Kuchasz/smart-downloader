import {IAction} from "./IAction";
import {IActionResult} from "./IActionResult";

export interface IActionRunner{
    run(action: IAction): IActionResult;
}