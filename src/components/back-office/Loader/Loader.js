import React from 'react';
import './Loader.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () =>( 
    <div className="loader">
        <CircularProgress disableShrink  />
    
    </div>    
);


export default Loader;


