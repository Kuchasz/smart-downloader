import * as React from 'react';
import {Account} from './Account';

export class AccountList extends React.Component<any, any> {
  render (){
    return <div className="accounts">
      {this.props.accounts.map(acc=>(<Account key={acc.id} {...acc}/>))}
    </div>;
  }
}
