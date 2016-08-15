import React from 'react';
import {Account} from './Account.jsx';

export class AccountList extends React.Component {
  render (){
    return <div className="accounts">
      {this.props.accounts.map(acc=>(<Account key={acc.id} {...acc}/>))}
    </div>;
  }
}
