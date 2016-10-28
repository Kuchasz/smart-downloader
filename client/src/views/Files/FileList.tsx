import * as React from 'react'
import {File as FileComponent} from './File';
import {connect} from 'react-redux';
import {File} from "../../../../domain/Files/Index";

interface FileListProps {
	files: File[];
}

class FileListComponent extends React.Component<FileListProps, {}> {
	render() {
		return <table>
			<thead>
			<tr>
				<th><input type="checkbox" id="checkFile"/><label htmlFor="checkFile"><span></span></label></th>
				<th>Filename</th>
				<th>Status</th>
				<th>Speed</th>
				<th>Estimated time</th>
				<th>Progress</th>
			</tr>
			</thead>
			<tbody>
			{this.props.files.map(file => (<FileComponent
				key={file.id} {...file} {...file.download} />))}
			</tbody>
		</table>;
	}
}

export const FileList = connect(state =>({
	files: state.files
}))(FileListComponent);
