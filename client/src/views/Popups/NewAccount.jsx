import React from 'react';
export class NewAccount extends React.Component {
  render () {
    return <div className="newForm">
      <form>
        <div className="fields">
          <span className="close">X</span>
          <h3>Account data</h3>
          <input type="text" name="login" placeholder="Login" />
          <input type="password" name="password" placeholder="Password" />
          <h3>Choose account color</h3>
          <div className="colors">
            <input type="radio" id="colorDefault" name="color" defaultValue="#22baa0" />
            <label htmlFor="colorDefault" />
            <input type="radio" id="colorRed" name="color" defaultValue="#f14e69" />
            <label htmlFor="colorRed" />
          </div>
        </div>
        <input type="submit" name="submit" defaultValue="ADD ACCOUNT" />
      </form>
    </div>;
  }
}
