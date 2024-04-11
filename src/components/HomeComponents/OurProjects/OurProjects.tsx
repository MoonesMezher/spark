import { CgArrowTopRightO } from "react-icons/cg"
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import MainTitle from "../MainTitle/MainTitle"
import ProjectCard from "../ProjectCard/ProjectCard"
import Brush from "../Brush/Brush"
import { projects } from "../../../const/staticData"

const OurProjects = () => {
    return (
        <section className="main-container">
            <div className="relative">
                <MainTitle 
                    key={2}
                    title={"Our Projects"} 
                    subtitle={'help you to build website companythat is modern, user friendly, good CEO, amd Clean design'} />
                <div className="md:absolute max-[767px]:mt-5 right-0 bottom-0">
                    <BtnTheme title={'All Portfolio'}>
                        <CgArrowTopRightO className="animation text-xl"/>
                    </BtnTheme>
                </div>
                <Brush position={'absolute min-w-[50rem] min-h-[50rem] left-[-40%] top-0 translate-y-[-50%]'}/>
            </div>
            <div className="flex items-center justify-between max-[2399px]:justify-center flex-wrap mt-5 gap-x-10 w-full">
                {projects && projects?.map((e, i) => <ProjectCard key={i} info={e} index={i}/>)}
            </div>
        </section>
    )
}

export default OurProjects