import { TCourseCardProps } from "../../../types"
import NormalBtn from "../../SharedComponents/NormalBtn/NormalBtn"
import StarsRating from "../../SharedComponents/StarsRating/StarsRating"

const CourseCard = ({ info } : TCourseCardProps) => {    
    return (
        <div className="basis-[100%] md:basis-[30%] flex-1 overflow-hidden rounded-lg">
            <div className="w-full min-h-[7em] max-h-[12em] overflow-hidden">
                <img src={info.img} alt={info.img} className="w-full h-full object-cover"/>
            </div>
            <div className="p-5 bg-__blue_cards">
                <h1 className="text-xl font-bold mb-1 truncate">{info.title}</h1>
                <div className="flex justify-between items-center text-[.9rem]">
                    <StarsRating rating={info.rate}/>
                    <p>{info.rate}.0 ({info.ratingCounts} reating)</p>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex justify-between gap-2 text-[.8rem] font-bold">
                        <div className="flex flex-col text-__white_blue">
                            <span>${info.offer}</span>
                            <span>0</span>
                        </div>
                        <div className="flex flex-col gap-1 text-__main_dark scale-[.8] translate-y-[-8%]">
                            <del>${info.price}</del>
                            <span>0</span>
                        </div>
                    </div>
                    <NormalBtn color={'__white_blue'} link={'/'} title={'Add to Cart'}/>
                </div>
            </div>
        </div>
    )
}

export default CourseCard