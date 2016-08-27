import * as React from 'react'
import {connect} from 'react-redux';
import {default as Actions} from '../../ts/Actions/File';


export class FileControlsComponent extends React.Component<any, any> {
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
