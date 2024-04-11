import { feedbacks } from "../../../const/staticData"
import CourseTitle from "../CourseTitle/CourseTitle"
import FeedbackCard from "../FeedbackCard/FeedbackCard"

const Feedbacks = () => {
    return (
        <section className="mt-10">
            <CourseTitle title={'What our Students say'} subtitle={'There are many variations of passages of Lorem Ipsum available'}/>
            <div className="flex justify-between gap-10 flex-wrap">
                {feedbacks && feedbacks?.map((e, i) =>  <FeedbackCard key={i} info={e}/>)}
            </div>
        </section>
    )
}

export default Feedbacks