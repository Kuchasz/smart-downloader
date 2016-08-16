import React from 'react'

export class Logo extends React.Component {
  render (){
    return <div className="logo">
          <h1 ref={(element)=>console.log(element)}>SMART <sup>downloader</sup></h1>
        </div>;
  }
}
