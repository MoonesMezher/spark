import { useEffect, useState } from "react";
import BackButton from "../../components/SharedComponents/BackButton/BackButton"
import { useParams } from "react-router-dom";
import CourseInfo from "../../components/CourseComponents/CourseInfo/CourseInfo";
import { courseInfo } from "../../const/staticData";
import { TCourseInfo } from "../../types";
import SEO from "../../components/SharedComponents/SEO/SEO";

const CourseDetails = () => {
    const [details, setDetails] = useState<TCourseInfo>();

    const { id } = useParams();

    useEffect(() => {
        setDetails(courseInfo);
    }, [id]);

    return (
        <div className="bg-__main_dark overflow-hidden h-max">
            <SEO key={5} title={`SPARK - Course ${id}`} name="" type="" description=""/>
            <section className="main-container min-h-screen text-white relative">
                {details && <CourseInfo info={details}/>}
                <BackButton/>
            </section>
        </div>
    )
}

export default CourseDetails