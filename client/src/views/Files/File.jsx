import React, { PropTypes } from 'react'

export class File extends React.Component {
  render (){
    return <tr>
        <td><input type="checkbox" id="checkFile" checked={this.props.selected ? 'checked' : null} /><label htmlFor="checkFile"><span></span></label></td>
        <td>{this.props.fileName}</td>
        <td><span className={this.props.status}>{this.props.status}</span></td>
        <td>{this.props.speed} Mb/s</td>
        <td>{this.props.estimatedTime}</td>
        <td><div className="progressBar"><div style={{width: this.props.progress + '%'}}></div></div></td>
    </tr>;
}
}
