import MainTitle from "../MainTitle/MainTitle"
import Img from '../../../assets/students services.png'
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import { FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"
import Brush from "../Brush/Brush"
import BorderDesign from "../BorderDesign/BorderDesign"

const StudentsServices = () => {
    return (
        <section className="main-container flex justify-between min-[1501px]:justify-center items-center relative gap-5 max-[767px]:flex-col-reverse">
            <div className="max-[1500px]:basis-[50%]">
                <img src={Img} alt={Img} className="w-full h-full object-fit" />
            </div>
            <div className="max-[1500px]:flex-1">
                <MainTitle key={5} title={'Students Services'} subtitle={'help you to build website company that is modern, user friendly, good CEO, and Clean design'} purple={false}/>
                <ul className="my-5">{[1,2,3,4].map((e) => <li key={e} className="flex gap-2 items-center mb-1 max-[450px]:mx-auto max-[450px]:w-fit">
                        <FaCheck className="text-__green text-[.8rem]"/> <span className="text-white">Certification</span>
                    </li>)}
                </ul>
                <Link to={'/courses'} className="w-fit max-[450px]:mx-auto block">
                    <BtnTheme title={'Explorer Course'} style={'ms-0'}/>
                </Link>
            </div>
            <BorderDesign key={7} position={'w-[80%] h-[60%] left-[-2%] max-[830px]:left-0 top-[-2px] border-r-transparent border-b-transparent rounded-r-none'}/>
            <BorderDesign key={8} position={'w-[93%] max-[650px]:w-[80%] h-[50%] left-[10%] max-[830px]:left-[7%] max-[650px]:left-[20%] top-[-50%] border-l-transparent border-t-transparent rounded-l-none'}/>
            <Brush position={'right-[-25em] top-[-10em] w-[50em] h-[50em]'}/>
        </section>
    )
}

export default StudentsServices