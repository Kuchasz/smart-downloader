import {Files as CreateFiles, CreateFile} from '../Data/Files';
import {Accounts} from '../Data/Accounts';

export function Files(state = CreateFiles(), action) {
  switch (action.type) {
    case 'ADD_FILE': {
      return [...state, CreateFile()];
    }
    case 'UPDATE_FILES': {
      return state.map(s=>Object.assign({}, s, {
        progress: Math.random()*100,
        speed: (Math.random()*10).toFixed(2)
      }));
    }
    case 'REMOVE_FILE': return state
    case 'UPDATE_FILE_PROGRESS': {
      return [ Object.assign({}, state[0], {progress: action.fileProgress}), ...state.slice(1)];
    }
    default: return state;
  }
};
