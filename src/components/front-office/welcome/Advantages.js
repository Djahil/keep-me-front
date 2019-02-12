import React, { Component, Fragment } from 'react';
import AdvantageCard from './AdvantageCard';

class Advantages extends Component {
    render() {
        return(
            <Fragment>
                <AdvantageCard />
                <AdvantageCard />
                <AdvantageCard />
            </Fragment>
        );
    }
}

export default Advantages;