import React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from '../AppBar/MyAppBar';
import MyMenu from '../Menu/MyMenu';
 const styles = {
     bgColor : {
        backgroundColor:'rgba(0, 0, 0, 0.50)'
     },
 };
const MyLayout = (props) => 
<Layout 
    {...props}
    style={styles.bgColor} 
    appBar={MyAppBar} 
    menu={ MyMenu }
/>;

export default MyLayout;