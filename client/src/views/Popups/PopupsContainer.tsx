import * as React from 'react'
import {NewAccount} from './NewAccount';
import {NewFiles} from './NewFiles';

export class PopupsContainer extends React.Component<any, any> {
  render (){
    return <div>
      <NewAccount/>
      <NewFiles/>
    </div>;
  }
}
