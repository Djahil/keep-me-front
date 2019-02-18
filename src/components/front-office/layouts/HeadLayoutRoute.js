import React from 'react';
import { Route } from 'react-router-dom';
import HeadLayout from './HeadLayout';


const HeadLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <HeadLayout>
          <Component {...matchProps} />
        </HeadLayout>
      )} />
    )
};

export default HeadLayoutRoute;