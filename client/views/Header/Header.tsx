import * as React from 'react'
import {Logo} from './Logo';
import {Profile} from './Profile';

export class Header extends React.Component<any, any> {
  render () {
    return <div className="container">
      <Logo/>
      <Profile/>
    </div>
  }
}
