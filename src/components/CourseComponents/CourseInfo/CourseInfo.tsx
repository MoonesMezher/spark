import { Link } from "react-router-dom"
import BtnTheme from "../../SharedComponents/BtnTheme/BtnTheme"
import StarsRating from "../../SharedComponents/StarsRating/StarsRating"
import InfoCourseCard from "../InfoCourseCard/InfoCourseCard"
import BoxInfo from "../../SharedComponents/BoxInfo/BoxInfo"
import LongText from "../LongText/LongText"
import CourseInfoSectionTheme from "../CourseInfoSectionTheme/CourseInfoSectionTheme"
import Lessons from "../Lessons/Lessons"
import ReviewForm from "../ReviewForm/ReviewForm"
import { TCourseInfoProps } from "../../../types"

const CourseInfo = ({ info } : TCourseInfoProps) => {     
    return (
        <div className="bg-__enternal_section_dark rounded-lg w-full mt-[5em] p-10">
            <h1 className="text-__white_blue font-bold text-[2rem] mb-2">{info?.title}</h1>
            <div className="w-full relative">
                <img src={info.img} alt={info.img} className="object-cover w-full h-full"/>
                {info.popular && <BoxInfo name={'Popular'} postion={'left-0 top-0'}/>}
                <span className="text-black absolute left-0 bottom-0 z-1 px-8 py-3 font-bold">{info.duration}</span>
            </div>
            <div className="flex justify-between items-start gap-5 mt-5 max-[768px]:flex-col max-[768px]:items-center">
                <InfoCourseCard data={info}/>
                <div className="basis-[30%] flex-1 max-[768px]:order-3">
                    <Link to={'/'}>
                        <BtnTheme title={'Enroll Now'} style={'rounded-md'}/>
                    </Link>
                </div>
                <div className="flex gap-2 items-center flex-wrap basis-[30%] flex-1 max-[768px]:order-1">
                    <StarsRating rating={info?.rate}/> <span className="text-__text_gray">({info.ratingCounters})</span>
                </div>
            </div>
            <CourseInfoSectionTheme title={'Details'}>
                <LongText text={info?.details} charactersNumber={200}/>
            </CourseInfoSectionTheme>
            <CourseInfoSectionTheme title={'Lessons'}>
                <Lessons lessons={info?.lessons} ConstLessonsNumberPerPage={4}/>
            </CourseInfoSectionTheme>            
            <CourseInfoSectionTheme title={'Write A Review'}>
                <ReviewForm/>
            </CourseInfoSectionTheme>                        
        </div>
    )
}

export default CourseInfo