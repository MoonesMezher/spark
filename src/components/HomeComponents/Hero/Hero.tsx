import { CgArrowTopRightO } from "react-icons/cg";
import Img from '../../../assets/Group.png'
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme";
import './heroImgStyle.css'
import { socialMediaContacts } from "../../../const/staticData";

const Hero = () => {
    const title: string = 'Create your dreams';

    const subtitle: string = 'help you to build website company that is modern, user friendly, good CEO, and Clean design';

    return (
        <div className="hero w-full h-screen flex justify-center items-center bg-__main_dark relative">
            <div className="flex flex-col gap-10 relative z-10 text-center text-white">
                <div className="flex justify-center items-center gap-4 text-xl">
                    {socialMediaContacts.map((e, i) => <a key={i} href={e.link} className="hover:text-__white_blue duration-300">{e.icon}</a>)}
                </div>
                <h1 className="text-5xl md:text-8xl opacity-90 gradient-hero">{title}</h1>
                <p>{subtitle}</p>
                <BtnTheme title={'Get Started'}>
                    <CgArrowTopRightO className="animation text-xl"/>
                </BtnTheme>
                <div className="mx-auto animate-__bounce">
                    <img src={Img} alt={Img} className="object-cover"/>
                </div>
            </div>
        </div>
    )
}

export default Hero