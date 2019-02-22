import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Group';
import Dashboard from '../Dashboard/Dashboard';
import Background from '../Images/Montagne.jpg';

const styles = {
    bgColor: {
        height:'150vh',
        backgroundColor:'rgba(0, 0, 0, 0.70)'  
    },
    bgImage:{
        height:'150vh',
        backgroundImage: `url(${Background})`,
      
        
         
    },
    color: {
        color:"#ffffff",
    },
}; 

const MyMenu = ({ resources, onMenuClick, logout }) => (
    <div 
    
    style={styles.bgImage} 
    >
        <div style={styles.bgColor} >
        <MenuItemLink
            dashboard={Dashboard}
            key={ <Dashboard />} 
            to= "/Dashboard"
            primaryText="Dashboard"
            leftIcon={<DashboardIcon />}
            onClick={onMenuClick}
            style={styles.color} 
        />
        {resources.map(
            resource => (
                <MenuItemLink   
                    key={resource.name}
                    to={`/${resource.name}`} 
                    primaryText={resource.name}
                    leftIcon={<PersonIcon />} 
                    onClick={onMenuClick}
                    style={styles.color}  
                />
        ))}        
        <Responsive
            small={logout}
            medium={null}
            style={styles.color} 
        />
        </div>
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));

