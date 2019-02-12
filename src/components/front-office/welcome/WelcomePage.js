import React, { Component, Fragment } from 'react'
import Intro from './Intro';
import Advantages from './Advantages';


class WelcomePage extends Component {
  render() {
    return (
    <Fragment>
        <Intro />
        <Advantages />
    </Fragment>
    );
  }
}

export default WelcomePage;