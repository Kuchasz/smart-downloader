export interface Socket {
    send(payload: any);
    on(event: string, handler: Function);
}