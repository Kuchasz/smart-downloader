import React from 'react'
import {Logo} from './Logo.jsx';
import {Profile} from './Profile.jsx';

export class Header extends React.Component {
  render () {
    return <div className="container">
      <Logo/>
      <Profile/>
    </div>
  }
}
