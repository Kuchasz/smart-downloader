export interface IMessage {
    $type: string;
}

export type MessageContructor<T extends IMessage> = Function & { prototype: T, new(...args: any[]): T };

export class SubscribeMessage implements IMessage {
    readonly $type = "SubscribeMessage";

    constructor(readonly messageName: string) {
    }
}

export class Subscribtion<T extends IMessage> {
    constructor(readonly message: IMessage, readonly handler: HandlerFunction<T>) {
    }
}

export type UnsubscribeFunction = () => void;
export type HandlerFunction<T extends IMessage> = (message: T) => void;