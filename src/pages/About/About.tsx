import Img from '../../assets/about-us-bg.png'
import SEO from '../../components/SharedComponents/SEO/SEO'

const About = () => {
    return (
        <div className="bg-__main_dark overflow-hidden h-max pt-10">
            <SEO key={6} title="SPARK - About" name="" type="" description=""/>
            <section className="main-container text-white max-[560px]:text-center min-h-[100vh]">
                <h1 className='text-center font-bold text-[2rem]'>About <span className='text-__white_blue'>US</span></h1>
                <div className='flex gap-20 mt-20 flex-col md:flex-row'>
                    <div className='basis-[45%]'>
                        <h2 className='font-bold text-[2rem] mb-10'>Who <span className="text-__white_blue">We Are....</span></h2>
                        <p className='leading-10'>Spark is a software engineering company that specialzes in developing cutting-edge solutions for various domains.
                            we have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality
                            products. Whether you need a web app, a mobile app, a game, a chatbot, or anything else, Spark can make it happen.
                        </p>
                    </div>
                    <div className='md:basis-[30%] md:h-fit mx-auto'>
                        <img src={Img} alt={Img} className='object-cover md:w-full md:h-full'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About