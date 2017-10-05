import React, { Component } from 'react';

class Gif extends Component {

  render() {
    console.log('Gif renders')
    return(

      <div>

      <div>
      <button onClick={this.props.changeGif} disabled={this.props.isLoaded}>Change GIF</button>
      </div>

      <img src={this.props.oneGif.image_url}/>

      </div>
      )
  }

}


export default Gif;
