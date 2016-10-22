import { createFiles, createFile } from '../Data/Files';
import { getRandomInt, getRandomFloat } from "../Data/Common";

export function Files(state = createFiles(), action) {
  switch (action.type) {
    case 'ADD_FILE': {
      return [ ...state, { id: action.id, fileName: action.name, status: 'Progress', speed: 1, estimatedTime: 'aaa', progress: 0, selected: false, accountId: 0}];
    }
    case 'UPDATE_FILES': {
      return state.map(s=>Object.assign({}, s, {
        progress: getRandomInt(),
        speed: getRandomFloat(10)
      }));
    }
    case 'REMOVE_FILE': return state;
    case 'UPDATE_FILE_PROGRESS': {
    	const _targetFile = state.filter(f => f.id === action.id)[0];
		const _targetFileIndex = state.indexOf(_targetFile);
      return [ ...state.slice(0, _targetFileIndex), Object.assign({}, _targetFile, { progress: action.progress}), ...state.slice(_targetFileIndex+1) ];
    }
    default: return state;
  }
};
