import { TCourseTitleProps } from "../../../types"

const CourseTitle = ({ title, subtitle } : TCourseTitleProps) => {
    return (
        <div className="w-full text-center mb-10">
            <h1 className="mb-5 text-[2rem] font-bold">{title}</h1>
            <p className='max-w-[30em] mx-auto'>{subtitle}</p>
        </div>
    )
}

export default CourseTitle