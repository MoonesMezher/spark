import StarsRating from "../../SharedComponents/StarsRating/StarsRating"
import Img from '../../../assets/feedback.png'
import { TFeedbackCardProps } from "../../../types"

const FeedbackCard = ({ info } :TFeedbackCardProps ) => {
    return (
        <div className="p-6 rounded-lg basis-[100%] md:basis-[30%] flex-1 bg-__blue_cards">
            <h1 className="text-center text-__white_blue text-[1.5rem] font-bold w-fit relative mb-3 ms-2 leading-7">
                Great <br/>Platform
                <div className="absolute left-[-.4em] bottom-[-.2em] text-5xl text-white h-[.8em] w-[.5em]">
                    <img src={Img} alt={Img} className="object-cover w-full h-full"/>
                </div>
            </h1>
            <p className="text-center">{info.text}</p>
            <div className="flex items-center justify-start gap-2 mt-3">
                <div className="rounded-full overflow-hidden w-[3rem] h-[3rem]">
                    <img src={info.userimg} alt={info.userimg} className="object-cover w-full h-full"/>
                </div>
                <div className="text-[.9rem]">
                    <p className="mb-1">{info.username}</p>
                    <StarsRating rating={info.rate}/>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard