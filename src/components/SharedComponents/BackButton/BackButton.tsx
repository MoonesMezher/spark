import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"

const BackButton = () => {
    return (
        <Link to={'../'} className='absolute left-[0] top-[4em] flex items-center gap-2 justify-center text-__white_blue font-bold text-lg hover:opacity-90'>
            <IoIosArrowBack/>
            <span className='underline'>Back</span>
        </Link>
    )
}

export default BackButton