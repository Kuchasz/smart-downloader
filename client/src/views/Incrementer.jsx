import React from 'react';

class Incrementer extends React.Component {
  render(){
    return <div><h1>{this.props.val}</h1></div>;
  }
}

module.exports = {
  Incrementer
};
