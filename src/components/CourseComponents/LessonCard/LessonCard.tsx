import { Link } from "react-router-dom"
import { TLessonCardProps } from "../../../types"

const LessonCard = ({ lesson, index } : TLessonCardProps) => {
    return (
        <div>
            <h2 className="flex flex-wrap w-fit"><span className="me-2">Lesson {index}:</span> <Link to={lesson.url} className="text-__white_blue font-bold hover:underline">{lesson.title}</Link></h2>
            <p className="mt-1 text-__text_gray">{lesson.description}</p>
        </div>
    )
}

export default LessonCard