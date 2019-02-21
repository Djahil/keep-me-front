import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import MyAppBar from '../AppBar/MyAppBar';
import MyMenu from '../Menu/MyMenu';

const MySidebar = props => <Sidebar {...props} size={200} />;

const MyLayout = (props) => 
<Layout 
    {...props}
    sidebar={MySidebar} 
    appBar={MyAppBar} 
/>;

export default MyLayout;