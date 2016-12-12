export interface IQueueClient{
    subscribe<T>(handle: (message: T) => void): void;
    push<T>(message: T): void;
}