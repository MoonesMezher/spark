import StarsRating from "../../SharedComponents/StarsRating/StarsRating"
import { TSwiperDataProps } from "../../../types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "./Next/Next";
import Prev from "./Prev/Prev";

const Swiper = ({ team }: TSwiperDataProps) => {
    const settings = {
        // dots: true,
        // infinite: true,
        // autoplay: true,
        speed: 1000,
        // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <Next onClick={() => 0}/>,
        prevArrow: <Prev onClick={() => 1}/>

    };

    return (
    <div className="w-full mt-32 mx-auto p-8 rounded-md bg-__section_gray">
        <Slider {...settings} className="w-full h-[35em] md:h-[25em] min-[1030px]:h-[22em] text-white overflow-hidden" >
            {team.map((e, i) => <div key={i} className="">
                <div className="rounded-full w-[7em] h-[7em] mx-auto overflow-hidden">
                    <img src={e.img} alt={e.name} className="w-full object-cover"/>
                </div>
                <div className="mt-2 mx-auto text-center">
                    <h1 className="font-bold">{e.name}</h1>
                    <h2 className="underline">{e.postion}</h2>
                    <h3 className="mt-2"><StarsRating rating={e.rate}/></h3>
                </div>
                <p className="mt-3 text-[1.1rem] text-center mx-auto max-w-[30em] h-full">{e.discription}</p>
            </div>)}
        </Slider>
        <hr className="bg-__shadow_gray mt-16 mb-5"/>
    </div>
    )
}

export default Swiper




