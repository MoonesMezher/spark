import BackButton from "../../components/SharedComponents/BackButton/BackButton"
import ServiceInfoCard from "../../components/ServicePageComponents/ServiceInfoCard/ServiceInfoCard"
import { servicesData } from "../../const/staticData"
import SEO from "../../components/SharedComponents/SEO/SEO"


const ServicesPage = () => {
    return (
        <div className="bg-__main_dark overflow-hidden h-max  top-0">
            <SEO key={2} title="SPARK - Services" name="" type="" description=""/>
            <section className="main-container min-h-screen text-white relative">
                <div className="flex flex-col gap-12 mt-32">
                    {servicesData && servicesData?.map((e, i) => <ServiceInfoCard key={i} info={e} index={i}/>)}
                </div>
                <BackButton/>
            </section>
        </div>
    )
}

export default ServicesPage