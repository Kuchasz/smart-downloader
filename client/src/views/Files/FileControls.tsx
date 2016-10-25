import * as React from 'react'
import {connect} from 'react-redux';
import {fileActionCreators} from '../../ts/Actions/File';

const _links = [
	'http://movietrailers.apple.com/movies/oscilloscope/always-shine/always-shine-trailer-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/independent/the-windmill/the-windmill-clip-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/independent/the-unspoken/the-unspoken-trailer-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/independent/off-the-rails/off-the-rails-trailer-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/independent/growing-up-smith/growing-up-smith-trailer-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/focus_features/nocturnal-animals/nocturnal-animals-trailer-1_h1080p.mov',
	'http://movietrailers.apple.com/movies/paramount/arrival/arrival-trailer-1_h1080p.mov'
];

interface FileControlsProps{
	AddFile(id: number, url: string): void;
}

export class FileControlsComponent extends React.Component<FileControlsProps, {}> {
	render() {
		return  <div>
			<button onClick={()=>this.props.AddFile(Math.floor(Math.random()*1000), _links[Math.floor(Math.random()*_links.length)])}>Delete</button>
			<button>Pause</button>
			<button>Download</button>
		</div>;
	}
}

export const FileControls = connect(null, dispatch => ({
		AddFile: (id: number, url: string) => {
			dispatch(fileActionCreators.createAddFileAction(id, url))
		}
	})
)(FileControlsComponent);
