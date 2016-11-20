import {getNameFromFunction} from "./services/FunctionNameAccessor";
import {IAction} from "./IAction";

export abstract class Action implements IAction {
    $type: string;
    protected constructor($type?: string) {
        this.$type = $type || getNameFromFunction(this.constructor);
    }
}