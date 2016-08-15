import React from 'react'
import {NewAccount} from './NewAccount.jsx';
import {NewFiles} from './NewFiles.jsx';

export class PopupsContainer extends React.Component {
  render (){
    return <div>
      <NewAccount/>
      <NewFiles/>
    </div>;
  }
}
