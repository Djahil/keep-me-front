import React, {Fragment} from 'react';

import Header from './header/Header'
import Footer from './footer/Footer'
// import './HeadFootLayout.scss';

const style = {
    marginTop: '90px',
    minHeight: '78vh' // chiffre trouvé a la mano comme Papa Truchot !
};

const HeadFootLayout = ({children}) => (
    <Fragment>
        <Header />
        <div style={style}>
            {children}
        </div>
        <Footer/>
    </Fragment>
);
export default HeadFootLayout;


