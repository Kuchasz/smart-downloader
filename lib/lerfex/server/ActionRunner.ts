import {IActionHandler} from "../IActionHandler";
import {IActionRunner} from "../IActionRunner";
import {IAction} from "../IAction";
import {getNameFromFunction} from "../services/FunctionNameAccessor";
import {IActionResult} from "../IActionResult";

interface INamedActionHandler {
    $type: string;
    $handler: {new(): IActionHandler<IAction>};
}

export class ActionRunner implements IActionRunner {
    private _handlers: INamedActionHandler[];

    constructor(handlers: {new(): IActionHandler<IAction>}[]) {
        this._handlers = handlers.map(h => ({
            $type: getNameFromFunction(h),
            $handler: h
        }));
    }

    run(action: IAction): IActionResult {
        console.log(action.$type);
        return undefined;
    }
}