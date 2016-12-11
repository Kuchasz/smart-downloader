export interface IMessageQueue {
    subscribe<T>(onMessageHandler: (msg: T) => void);
    emit<T>(message: T): void;
}