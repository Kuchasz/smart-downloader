export function FileDownloads(state = [], action) {
	switch (action.type) {
		case 'UPDATE_FILES': {
			return action.fileDownloads;
		}
		default:
			return state;
	}
}