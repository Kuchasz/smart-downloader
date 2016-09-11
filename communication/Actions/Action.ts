export interface Action {
  type: string;
  executionMode: ActionExecution;
}

export enum ActionExecution{
  Local,
  Remote,
  Both
}
