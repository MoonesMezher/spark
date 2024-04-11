import { NavLink } from "react-router-dom"

const NavLinks = ({link, title}) => {
    return (
        <li>
            <NavLink className={({isActive}) => isActive? 'duration-300 hover:text-__white_blue text-__white_blue': 'duration-300 hover:text-__white_blue'} to={'/'+link}>{title}</NavLink>
        </li>
    )
}

export default NavLinks