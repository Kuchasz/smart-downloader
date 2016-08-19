import React from 'react'
import {connect} from 'react-redux';
import {default as Actions} from '../../js/Actions/File.js';


export class FileControlsComponent extends React.Component {
  render () {
    return  <div>
            <button onClick={()=>this.props.AddFile('Foo')}>Delete</button>
            <button>Pause</button>
            <button>Download</button>
    </div>;
  }
}

export const FileControls = connect(null, dispatch => ({
    AddFile: (fileName) => {
      dispatch(Actions.AddFile(fileName))
  }})
)(FileControlsComponent);
