import React, { Component } from 'react';
import '../styles/header.css'
import Carousel from './Carousel.js'

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div>
        <Carousel />
      </div>
    )
  }
}


export default Body;
