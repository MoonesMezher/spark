import BorderDesign from "../BorderDesign/BorderDesign"
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import MainTitle from "../MainTitle/MainTitle"
import { CgArrowTopRight } from "react-icons/cg"

const ServiceCom = () => {
    return (
        <section className="main-container relative">
            <div className="relative">
                <MainTitle 
                    key={4}
                    title={'Companies that can help you in.developing your company for the future'} 
                    subtitle={'Work in the IT field includes Web Design, UI/UX Design, Branding and Shopify Development'}/>
                <div className="max-[1029px]:mx-auto max-[1029px]:mt-5 w-fit min-[1030px]:absolute right-0 top-[.5em]">
                    <BtnTheme title={'Know More'} style={'flex w-full'}>
                        <CgArrowTopRight className="text-xl"/>
                    </BtnTheme>
                </div> 
            </div>
            <BorderDesign key={0} position={'w-[50%] h-[70%] right-[-2%] max-[830px]:right-0 top-[30%] rounded-s-none border-l-transparent border-t-transparent'}/>
        </section>
    )
}

export default ServiceCom