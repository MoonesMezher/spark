import { Link } from 'react-router-dom'
import CourseCard from '../../CourseComponents/CourseCard/CourseCard'
import CourseTitle from '../CourseTitle/CourseTitle'
import { courses } from '../../../const/staticData'

const PopularCourses = () => {
    return (
      <section>
        <div className="text-white mt-10 min-[1024px]:mt-32">
          <CourseTitle title={'Our Popular Course'} subtitle={'Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been th'}/>    
        </div>
        <div className="flex justify-between gap-10 flex-wrap">
          {courses && courses?.map((e, i) =>  (i+1 <= 6) && <CourseCard key={i} info={e}/>)}
        </div>
        <Link to={'/'} className='mx-auto mt-10 block w-fit rounded-[30px] p-2 px-4 bg-__shadow_gray duration-300 hover:opacity-90'>
          See More
        </Link>
      </section>
    )
}

export default PopularCourses