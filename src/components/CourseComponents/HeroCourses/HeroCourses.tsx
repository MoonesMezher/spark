import NormalBtn from "../../SharedComponents/NormalBtn/NormalBtn"
import Img1 from '../../../assets/Group 31.png'
import Img2 from '../../../assets/Group 32.png'
import Icon from '../../../assets/Layer 2.png'
import { Link } from "react-router-dom"

const HeroCourses = () => {
    return (
        <div className="flex justify-between mt-32 items-center max-[1024px]:flex-col-reverse">
            <div className="flex min-w-[20em] max-[1024px]:gap-5 max-[1024px]:mt-10 max-[340px]:flex-col min-[3500px]:flex-1">
                <div className="relative max-[340px]:min-w-[11em] max-[340px]:mx-auto min-[3500px]:w-full">
                    <img src={Img1} alt={Img1} className="w-full object-cover"/>
                    <Link to={'/'} className="absolute block max-w-[3em] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <img src={Icon} alt={Icon} className="bg-black rounded-full overflow-hidden"/>
                    </Link>
                </div> 
                <div className="relative min-[1025px]:translate-x-[-20%] min-[1025px]:translate-y-[40%] max-[340px]:w-[11em] max-[340px]:mx-auto min-[3500px]:w-full">
                    <img src={Img2} alt={Img2} className="w-full object-cover"/>
                    <Link to={'/'} className="absolute block max-w-[3em] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <img src={Icon} alt={Icon} className="bg-black rounded-full overflow-hidden"/>
                    </Link>
                </div>
            </div>
            <div className="max-[560px]:text-center">
                <h1 className="text-white text-[2.8rem] leading-snug">We are Always Ensure Best Course for your learning</h1>
                <p className="text-__white_blue text-[1.2rem] leading-8 mt-5 mb-4">Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the</p>
                <NormalBtn link={'/'} title={'Request a course'} color={'__white_blue'} />
            </div>
        </div>
    )
}

export default HeroCourses