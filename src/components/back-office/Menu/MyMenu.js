import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';

const MyMenu = ({ resources, onMenuClick, logout }) => (
    <div>
         <MenuItemLink to="/admin" primaryText="Dashboard" onClick={onMenuClick} />
        {resources.map(
            resource => (
                <MenuItemLink   
                    key={resource.name}
                    to={`/${resource.name}`} 
                    primaryText={resource.name} 
                    onClick={onMenuClick} 
                />
        ))}
       
        <Responsive
        small={logout}
        medium={null} 
        />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));

