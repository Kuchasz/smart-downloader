import React from 'react';

class Incrementer extends React.Component {
  render(){
    return <div>
      <h1 onClick={()=>this.props.rename()}>NAME: {this.props.person.name}</h1>
      <h1 onClick={()=>this.props.reage()}>AGE: {this.props.person.age}</h1>
      <h1 onClick={()=>this.props.resubject()}>SUBJECT: {this.props.noter.subject}</h1>
      <h1 onClick={()=>this.props.note()}>NOTE: {this.props.noter.val}</h1>
      </div>;
  }
}

module.exports = {
  Incrementer
};
