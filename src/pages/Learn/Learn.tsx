import { Link } from 'react-router-dom'
import Img1 from '../../assets/Property 1=Default-1.png'
import Img2 from '../../assets/underline.png';
import BackButton from '../../components/SharedComponents/BackButton/BackButton';
import SEO from '../../components/SharedComponents/SEO/SEO';

const Learn = () => {
    return (
        <div className="bg-__main_dark overflow-hidden h-max">
            <SEO key={1} title="SPARK - Learn" name="" type="" description=""/>
            <section className="main-container min-h-screen text-white relative">
                <div className='flex items-center justify-center gap-20 mt-20 max-[1040px]:flex-col-reverse'>
                    <div className='basis-[35%] max-[1040px]:w-full max-[1040px]:text-center'>
                        <h2 className='font-bold text-[2.5rem] mb-10 leading-10'>Learn with us anywhere with the best  
                            <span className="text-__white_blue relative ms-3">
                                experts <img src={Img2} alt={Img2} className='w-[20em] absolute bottom-[-10px] right-[20px]'/>
                            </span>
                        </h2>
                        <Link to={'/'} className='ms-10 block max-[1040px]:mx-auto rounded-md w-fit px-6 py-3 bg-__white_blue text-white text-[.8rem] duration-100 hover:underline'>Get Qoute Now</Link>
                    </div>
                    <div className='basis-[40em] h-fit max-[1040px]:basis-[100%] min-[2000px]:basis-[100%]'>
                        <img src={Img1} alt={Img1} className='object-cover min-[2000px]:w-full'/>
                    </div>
                </div>
                <BackButton/>
            </section>
        </div>
    )
}

export default Learn