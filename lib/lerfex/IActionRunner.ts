import {IAction} from "./IAction";
import {IFetchAction} from "./IFetchAction";

export interface IActionRunner{
    run(action: IAction): void;
    run<TResult>(action: IFetchAction<TResult>): TResult;
}