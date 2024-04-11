import { BiArrowToBottom } from "react-icons/bi"
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import MainTitle from "../MainTitle/MainTitle"
import { Link } from "react-router-dom"
import BorderDesign from "../BorderDesign/BorderDesign"

const WorkWithUs = () => {
    return (
        <section className="main-container flex justify-between items-center relative max-[570px]:flex-col gap-5 max-[570px]:text-center">
            <MainTitle key={7} title={"Let's work with Us"} subtitle={'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress'} purple={true}/>
            <Link to={'/'}>
                <BtnTheme title={'Download'} style={'mr-0'}>
                    <BiArrowToBottom/>
                </BtnTheme>
            </Link>
            <BorderDesign key={2} position={'w-[50%] h-full left-[-2%] max-[830px]:left-[0.2%] top-[-2px] border-r-transparent border-t-transparent rounded-r-none'}/>
            <BorderDesign key={3} position={'w-[60%] h-[40%] left-[15px] max-[830px]:left-[6.2%] top-[-36%] border-l-transparent border-t-transparent rounded-l-none rounded-t-none'}/>
            <BorderDesign key={4} position={'w-[60%] h-[150%] right-[-3%] max-[830px]:right-[0.2%] bottom-[-147%] max-[570px]:bottom-[-148%] max-[830px]:bottom-[-147.5%] md:bottom-[-147.5%] border-l-transparent border-b-transparent rounded-l-none'}/>
        </section>
    )
}

export default WorkWithUs