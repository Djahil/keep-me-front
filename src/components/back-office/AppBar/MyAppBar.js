import React from 'react';
import { AppBar } from 'react-admin';

const divStyle = {
    color : {
        backgroundColor: 'orange'
    }    
};

const MyAppBar = (props)  => (
    <AppBar 
        {...props} 
        style={divStyle.color}>
    </AppBar>
);

export default MyAppBar;