import {IActionHandler} from "../IActionHandler";
import {IActionRunner} from "../IActionRunner";
import {IAction} from "../IAction";
import {IFetchAction} from "../IFetchAction";
import {getNameFromFunction} from "../services/FunctionNameAccessor";

interface INamedActionHandler{
    $name: string;
    $handler: IActionHandler;
}

export class ActionRunner implements IActionRunner {
    private _handlers: INamedActionHandler[];
    constructor(handlers: {new(): IActionHandler}[]) {
        this._handlers = handlers.map(h => ({
            $name: getNameFromFunction(h),
            $handler: IActionHandler
        }));
    }

    run(action: IAction): void {
        var _handler = this._handlers.filter(h => h.$name === action.$name);
        console.log(_handler);
    }

    run<TResult>(action: IFetchAction<TResult>): TResult {
        return undefined;
    }
}