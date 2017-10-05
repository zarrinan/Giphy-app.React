import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import GifList from './components/GifList'


class App extends Component {
  constructor(){
    super();
    this.state = {
     bgColor: '#FFFFFF',
     apiData: {},
     //isLoaded: false,
    }
    this.changeGif = this.changeGif.bind(this)
  }

componentDidMount() {
  axios('http://api.giphy.com/v1/gifs/random?tag=ryan+gosling&api_key=85106578d15c4d968f3ee5e48e336e47')
  .then(res => {
    // console.log(res)
    this.setState({
      apiData: res.data.data,
      isLoaded: true,
    })
  })
  // this.setState({
  //   isLoaded: false,
  // })
}

changeGif() {
axios('http://api.giphy.com/v1/gifs/random?tag=ryan+gosling&api_key=85106578d15c4d968f3ee5e48e336e47')
  .then(res => {
    console.log(res)
    this.setState({
      apiData: res.data.data,
      //isLoaded: !this.state.isLoaded,
    })
  })
}

  render() {
    return (
      <div className="App">

    <GifList data={this.state.apiData}
             changeGif={this.changeGif} />
            {/* isLoaded={this.state.isLoaded}/>*/}
    </div>
    );
  }
}

export default App;
