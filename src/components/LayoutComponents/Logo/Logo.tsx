import { Link } from "react-router-dom"
import { TLogoProps } from "../../../types"

const Logo = ({img, title}: TLogoProps) => {
    return (
        <Link to={'/'} className="flex items-center gap-5 absolute z-30">
            <img src={img} alt={'logo'} className="object-cover w-[3em]"/>
            <span className="text-white">{title}</span>
        </Link>
    )
}

export default Logo