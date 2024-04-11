import { useLocation } from 'react-router-dom';
import { TLayoutProps } from '../types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useEffect, useState } from 'react';

const Layout = ({ children } : TLayoutProps) => {
    const [removeHeaderAndFooter, setRemoveHeaderAndFooter] = useState<boolean>(false);

    let { pathname } = useLocation();    

    useEffect(() => {
        if(pathname == '/error') {
            setRemoveHeaderAndFooter(true);
        } else {
            setRemoveHeaderAndFooter(false);
        }
        console.log(pathname);
        
    }, [pathname]);

    return (
        <div>
            {!removeHeaderAndFooter && <Header/>}
            <div>
                {children}
            </div>
            {!removeHeaderAndFooter && <Footer/>}
        </div>
    )
}

export default Layout