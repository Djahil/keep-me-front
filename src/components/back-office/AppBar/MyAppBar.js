import React from 'react';
import { AppBar } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


const divStyle = {
    bgColor : {
        backgroundColor: '#3f51b5'             
    }, 
    width : {
         flex : 1 
    },
    text : {
        color : '#ffffff', 
        cursor : 'pointer'
    }
};

const MyAppBar = ({classes, ...props})  => (
    
    <AppBar {...props}  
        position="static" 
        style={divStyle.bgColor}>
         <Toolbar style={divStyle.width}>
         <h2 style={divStyle.text}>
             Keepme
         </h2>
        </Toolbar>  
        <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton color="inherit">
                <Badge  badgeContent={2} color="secondary" >
                    <MailIcon />  
                </Badge>    
        </IconButton>
    </AppBar>
);

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(divStyle)(MyAppBar);