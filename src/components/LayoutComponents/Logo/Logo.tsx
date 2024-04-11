import { Link } from "react-router-dom"

const Logo = ({img, title}) => {
    return (
        <Link to={'/'} className="flex items-center gap-5 absolute z-30">
            <img src={img} alt={'logo'} className="object-cover w-[3em]"/>
            <span className="text-white">{title}</span>
        </Link>
    )
}

export default Logo