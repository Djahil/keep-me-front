import React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from '../AppBar/MyAppBar';
import MyMenu from '../Menu/MyMenu';

const MyLayout = (props) => 
<Layout 
    {...props} 
    appBar={MyAppBar} 
    menu={ MyMenu }
/>;

export default MyLayout;