export interface Action {
  type: string;
  executionMode: ActionScope;
}

export enum ActionScope{
  Local,
  Remote,
  Both
};