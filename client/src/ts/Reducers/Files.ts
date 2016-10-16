import { createFiles, createFile } from '../Data/Files';
import {getRandomInt, getRandomFloat} from "../Data/Common";

export function Files(state = createFiles(), action) {
  switch (action.type) {
    case 'ADD_FILE': {
      return [ ...state, createFile() ];
    }
    case 'UPDATE_FILES': {
      return state.map(s=>Object.assign({}, s, {
        progress: getRandomInt(),
        speed: getRandomFloat(10)
      }));
    }
    case 'REMOVE_FILE': return state;
    case 'UPDATE_FILE_PROGRESS': {
      return [ Object.assign({}, state[0], { progress: action.progress }), ...state.slice(1) ];
    }
    default: return state;
  }
};
