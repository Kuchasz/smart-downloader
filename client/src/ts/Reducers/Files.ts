import {Files as CreateFiles, CreateFile} from '../Data/Files';
import {Accounts} from '../Data/Accounts';

export function Files(state = CreateFiles(), action) {
  switch (action.type) {
    case 'ADD_FILE': {
      return [...state, CreateFile()];
    }
    case 'REMOVE_FILE': return state;
    default: return state;
  }
};
