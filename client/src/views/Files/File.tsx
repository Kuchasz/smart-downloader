import * as React from 'react'
import { File as FileModel, FileDownload } from "../../../../domain/Files/Index";

type FileProps = FileModel & FileDownload;

export class File extends React.Component<FileProps, {}> {
  render (){
    return <tr>
        <td><input type="checkbox" id="checkFile" defaultChecked={false} /><label htmlFor="checkFile"><span></span></label></td>
        <td>{this.props.name}</td>
        <td><span className={'Progress'}>{'Progress'}</span></td>
        <td>{(this.props.speed/1024).toFixed(2)} KB/s</td>
        <td>{'XX:XX:XX'}</td>
        <td><div className="progressBar"><div style={{width: this.props.progress + '%', background: 'red'}}></div></div></td>
    </tr>;
}
}
