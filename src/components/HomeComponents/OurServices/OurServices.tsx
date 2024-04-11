import { CgArrowTopRightO } from "react-icons/cg"
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import MainTitle from "../MainTitle/MainTitle"
import Brush from "../Brush/Brush"
import ServiceCard from "../ServiceCard/ServiceCard"
import BorderDesign from "../BorderDesign/BorderDesign"
import { services } from "../../../const/staticData"

const OurServices = () => {
    return (
        <section className="main-container relative">
            <div className="relative">
                <MainTitle 
                    key={3}
                    title={"Let's work together ,.our Services"} 
                    subtitle={'help you to build website companythat is modern, user friendly, good CEO, amd Clean design'} 
                    purple={true}/>
                <div className="md:absolute max-[767px]:mt-5 right-0 bottom-0">
                    <BtnTheme title={'Get Started'}>
                        <CgArrowTopRightO className="animation text-xl"/>
                    </BtnTheme>
                </div>
                <Brush position={'absolute min-w-[50rem] min-h-[50rem] left-[-40%] top-0 translate-y-[-50%]'}/>
            </div>
            <div className="flex justify-between gap-5 items-center flex-wrap mt-10 relative z-[1]">{services?.map((e, i) => <ServiceCard key={i} info={e} index={i+1}/>)}</div>
            <BorderDesign key={1} position={'w-[60%] h-[50%] left-[-2%] max-[830px]:left-0 top-[-2px] border-r-transparent border-b-transparent rounded-r-none'}/>
            <Brush position={'right-[0] translate-x-[50%] translate-y-[-50%] top-[50%] w-[50em] h-[50em]'}/>
        </section>
    )
}

export default OurServices