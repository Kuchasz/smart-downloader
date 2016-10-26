export function Files(state = [], action) {
	switch (action.type) {
		case 'UPDATE_FILES': {
			return action.files;
		}
		default:
			return state;
	}
};
