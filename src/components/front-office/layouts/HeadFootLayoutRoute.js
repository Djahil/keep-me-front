import React from 'react';
import { Route } from 'react-router-dom';
import HeadFootLayout from './HeadFootLayout';


const HeadFootLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <HeadFootLayout>
          <Component {...matchProps} />
        </HeadFootLayout>
      )} />
    )
};

export default HeadFootLayoutRoute;