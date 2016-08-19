import React from 'react'
import {File} from './File.jsx';
import {connect} from 'react-redux';

class FileListComponent extends React.Component {
  render (){
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
            {this.props.files.map(file => (<File key={file.id} {...file}/>))}
          </tbody>
      </table>;
  }
}

export const FileList = connect(state =>({
  files: state.files
}))(FileListComponent);
