import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  render() {
    return (
      <div>

          <Gif oneGif={this.props.data} changeGif={this.props.changeGif} isLoaded={this.props.isLoaded} />
      </div>
      )
  }

}

export default GifList;
