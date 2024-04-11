import MainTitle from "../MainTitle/MainTitle"
import MapImg from "../../../assets/Huge Global.png"
import Brush from "../Brush/Brush"
import BorderDesign from "../BorderDesign/BorderDesign"

const Contact = () => {
    return (
        <section className="main-container relative">
            <MainTitle key={0} title={'Contact Us'} subtitle={'From anywhere in the world'}/>
            <div className="mt-10 mx-auto w-full bg-__main_dark">
                <img src={MapImg} alt={'map-img'} className="object-cover w-full"/>
            </div>
            <Brush position={'left-[-40%] top-[-10%] min-w-[50rem] min-h-[50rem] '}/>
            <BorderDesign key={5} position={'w-[50%] h-[33%] left-[-2%] max-[830px]:left-0 top-[-2px] border-r-transparent border-b-transparent rounded-r-none'}/>
            <BorderDesign key={6} position={'w-[50%] h-[20%] left-[35%] top-[-20%] border-l-transparent border-t-transparent rounded-l-none'}/>
        </section>
    )
}

export default Contact