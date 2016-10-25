import * as React from 'react'
import { File as FileModel, FileDownload } from "../../../../domain/Files/Index";
import {formatDownloadSpeed, formatFileDownloadStateToString} from '../Helpers/Formatters';

type FileProps = FileModel & FileDownload;

export class File extends React.Component<FileProps, {}> {
  render (){
    return <tr>
        <td><input type="checkbox" id="checkFile" defaultChecked={false} /><label htmlFor="checkFile"><span></span></label></td>
        <td>{this.props.name}</td>
        <td><span className={formatFileDownloadStateToString(this.props.state)}>{formatFileDownloadStateToString(this.props.state)}</span></td>
        <td>{formatDownloadSpeed(this.props.speed, this.props.state)}</td>
        <td>{'XX:XX:XX'}</td>
        <td><div className="progressBar"><div style={{width: this.props.progress + '%', background: 'red'}}></div></div></td>
    </tr>;
}
}
