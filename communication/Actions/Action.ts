import {Action as ReduxAction} from 'redux';

export interface Action extends ReduxAction{
  type: string;
  executionMode: ActionScope;
}

export enum ActionScope{
  Local,
  Remote,
  Both
};