import * as React from 'react'

export class Profile extends React.Component<any, any> {
  render (){
    return <div className="profile">
      <input type="checkbox" id="profileMenu" />
      <label htmlFor="profileMenu">Michał Michalik</label>

      <ul className="profileMenu">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  }
}
