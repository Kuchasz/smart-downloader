import { createFiles, createFile } from '../Data/Files';
import {getRandomInt, getRandomFloat} from "../Data/Common";

export function Files(state = createFiles(), action) {
  switch (action.type) {
    case 'ADD_FILE': {
      const _f = createFile();
      _f.fileName = action.name;
      return [ ...state, _f ];
    }
    case 'UPDATE_FILES': {
      return state.map(s=>Object.assign({}, s, {
        progress: getRandomInt(),
        speed: getRandomFloat(10)
      }));
    }
    case 'REMOVE_FILE': return state;
    case 'UPDATE_FILE_PROGRESS': {
      return [ ...state.slice(0, state.length-1), Object.assign({}, state[state.length-1], { progress: action.progress }) ];
    }
    default: return state;
  }
};
