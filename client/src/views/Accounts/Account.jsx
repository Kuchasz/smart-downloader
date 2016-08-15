import React from 'react';

export class Account extends React.Component{
  render(){
    return <div className="account">
      <h2>{this.props.nick}</h2>
      <p>Pozostało: {this.props.currentTransfer} / {this.props.maxTransfer} GB</p>
      <div className="transferBar">
        <div style={{width: this.props.currentTransfer + '%', background: this.props.color}}/>
      </div>
      <span className="downloads" style={{color: this.props.color}}>5<span style={{ background: this.props.color }}>currently downloading</span>
    </span>
    <div className="endPremium">{this.props.daysLeft} DNI</div>
    <div className="accountInfo" style={{ borderColor: this.props.color }}>
      <div className="square" style={{ background: this.props.color }}/>
      <h3>Koniec premium</h3>
      <p>{this.props.endPremium}</p>
      <h3>Limit transferu / dzień</h3>
      <p>30 GB</p>
      <h3>Data rejestracji</h3>
      <p>{this.props.registrationDate}</p>
      <h3>Pobrano</h3>
      <p>{this.props.amountData} GB</p>
    </div>
</div>;
}
}
