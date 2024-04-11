import Contact from "../../components/HomeComponents/Contact/Contact"
import Hero from "../../components/HomeComponents/Hero/Hero"
import OurProjects from "../../components/HomeComponents/OurProjects/OurProjects"
import OurServices from "../../components/HomeComponents/OurServices/OurServices"
import ServiceCom from "../../components/HomeComponents/ServiceCom/ServiceCom"
import StudentsServices from "../../components/HomeComponents/StudentsServices/StudentsServices"
import Team from "../../components/HomeComponents/Team/Team"
import WorkWithUs from "../../components/HomeComponents/WorkWithUs/WorkWithUs"
import SEO from "../../components/SharedComponents/SEO/SEO"

const Home = () => {
    return (
    <div className="bg-__main_dark overflow-hidden h-max">
        <SEO key={0} title="SPARK - Home" name="" type="" description=""/>
        <Hero/>
        <ServiceCom/>
        <OurServices/>
        <WorkWithUs/>
        <OurProjects/>
        <StudentsServices/>
        <Contact/>
        <WorkWithUs/>
        <Team/>
    </div>
    )
}

export default Home