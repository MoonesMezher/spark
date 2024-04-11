import { Link } from 'react-router-dom'
import Img from '../../assets/errorImg.png'

import './animationStyle.css'

const Error = () => {
    return (
        <div className="main-container h-screen flex justify-center items-center">
            <div className='w-[22em] flex justify-center items-center flex-col gap-3 text-center'>
                <div className='w-full h-full'>
                    <img src={Img} alt={Img} className="w-full h-full object-fit animate-snooze"/>
                </div>
                <h1 className='text-__white_blue font-bold text-3xl'>Page Not Found</h1>
                <p className='w-full text-__text_gray'>The page you're looking for isn't avaiable. Try to search again or use the go back button below.</p>
                <Link to={'../'} className='cursor-pointer bg-__white_blue text-white w-full py-2 font-bold rounded-md text-center mt-1 hover:opacity-90 duration-200'>Reload</Link>
            </div>
        </div>
    )
}

export default Error