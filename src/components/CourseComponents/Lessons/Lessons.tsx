import { useState } from "react";
import LessonCard from "../LessonCard/LessonCard"
import { TLessonsProps } from "../../../types";

const Lessons = ({ lessons, ConstLessonsNumberPerPage } : TLessonsProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    let lessonsNumberPerPage: number = (isExpanded ? lessons.length+1 : ConstLessonsNumberPerPage);   

    return (
        <div>
            <div className="flex flex-col gap-4">
                {lessons?.map((e, i) => (i+1 <= lessonsNumberPerPage) && <LessonCard key={i} lesson={e} index={i+1}/>)}
            </div>
            <div
                className="text-__white_blue hover:underline mx-auto w-fit mt-2 cursor-pointer"
                onClick={toggleExpanded}
            >
                {isExpanded ? "Read Less" : "Read More"}
            </div>
        </div>
    )
}

export default Lessons