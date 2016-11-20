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
            $type: this._getActionTypeFromHandlerName(getNameFromFunction(h)),
            $handler: h
        }));
    }

    run(action: IAction): IActionResult {
        const handlerConstructor = this._handlers.filter(h => h.$type == action.$type)[0].$handler;
        const handler = new handlerConstructor();
        handler.handle(action);
        return undefined;
    }

    private _getActionTypeFromHandlerName(handlerName: string):string {
        return handlerName.replace('Handler', '');
    }
}