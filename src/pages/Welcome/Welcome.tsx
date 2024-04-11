import Img1 from '../../assets/welcome page.png'
import NormalBtn from '../../components/SharedComponents/NormalBtn/NormalBtn'
import SEO from '../../components/SharedComponents/SEO/SEO'

const Welcome = () => {

    return (
        <section className="min-h-screen w-full">
            <SEO key={3} title="SPARK - Welcome" name="" type="" description=""/>
            <div className='absolute left-0 top-0 h-full w-full'>
                <img src={Img1} alt={Img1} className='object-cover h-full w-full'/>
            </div>
            <div className='text-white text-center absolute left-[50%] top-[50%] translate-x-[-50%] max-[1040px]:translate-y-[-30%] z-10'>
                <h1 className='font-bold text-[1.7rem] mb-5'>Welcome the the world's best service platform</h1>
                <h2 className='text-[.9rem]'>We offer a wide range of services for both corporates and students. Click below explore</h2>
                <div className='flex justify-center items-center gap-5 mt-14 max-[600px]:flex-col max-[600px]:mt-10'>
                    <NormalBtn title={'Corporate Services'} link={'/corporate-services'} color={'__white_blue'}/>
                    <NormalBtn title={'Student Services'} link={'/student-services'} color={'white text-black'}/>
                </div>
            </div>
        </section>
    )
}

export default Welcome