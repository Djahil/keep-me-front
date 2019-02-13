import React, { Component, Fragment } from 'react'
import Intro from './intro/Intro';
import Advantages from './advantages/Advantages';
import Products from './products/Products'
import Presentation from './presentation/Presentation'

class WelcomePage extends Component {
  render() {
    return (
    <Fragment>
        <Intro />
        <Advantages />
        <Products />
        <Presentation />
    </Fragment>
    );
  }
}

export default WelcomePage;