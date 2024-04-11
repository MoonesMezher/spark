import BackButton from "../../components/SharedComponents/BackButton/BackButton"
import Feedbacks from "../../components/LearnComponents/Feedbacks/Feedbacks"
import HeroCourses from "../../components/CourseComponents/HeroCourses/HeroCourses"
import PopularCourses from "../../components/LearnComponents/PopularCourses/PopularCourses"
import SEO from "../../components/SharedComponents/SEO/SEO"

const Courses = () => {
    return (
        <div className="bg-__main_dark overflow-hidden h-max">
            <SEO key={4} title="SPARK - Courses" name="" type="" description=""/>
            <section className="main-container min-h-screen text-white relative">
                <HeroCourses/>
                <PopularCourses/>
                <Feedbacks/>
                <BackButton/>
            </section>
        </div>
    )
}

export default Courses