import LogoImg from '../../assets/Ellipse 99.svg';
import NavLinks from "../../components/LayoutComponents/NavLink/NavLinks";
import Logo from "../../components/LayoutComponents/Logo/Logo";
import { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import { navLinksArray } from '../../const/staticData';

const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const root = useLocation();

    useEffect(() => {
        setShowMenu(true);
    }, [root]);

    window.onscroll = function() { 
        setTimeout(() => {
            setIsScroll(window.scrollY > 0)
        }, 500);
    };

    return (
        <header className={`overflow-hidden p-5 flex justify-between items-center fixed left-0 top-0 w-full z-50 duration-300 ${isScroll? 'bg-__dark_blue': ''}`}>
            <Logo img={LogoImg} title={'SPARK'}/>
            <ul className={`flex justify-center items-center gap-5 mx-auto text-white max-[767px]:flex-col max-[767px]:w-full max-[767px]:fixed left-[50%] max-[767px]:pt-[5em] max-[767px]:pb-5 max-[767px]:translate-x-[-50%] max-[767px]:bg-__dark_blue duration-500 ${showMenu ? 'top-[-100%]': 'top-0'}`}>
                {navLinksArray.map((e, i) => <NavLinks key={i} title={e.title} link={e.link}/>)}
            </ul>
            <div className='md:hidden ms-auto z-30' onClick={() => setShowMenu(!showMenu)}>
                {!showMenu? <CgClose className={`text-white text-[2rem]`}/>:<MdMenu className={`text-white text-[2rem]`}/>}
            </div>
        </header>
    )
}

export default Header