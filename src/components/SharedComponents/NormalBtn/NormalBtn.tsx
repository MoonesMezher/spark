import { Link } from "react-router-dom"

const NormalBtn = ({title, link, color}) => {
    return (
        <Link to={link} className={`rounded-lg bg-${color} p-2 font-bold duration-300 hover:opacity-90`}>{title}</Link>
    )
}

export default NormalBtn