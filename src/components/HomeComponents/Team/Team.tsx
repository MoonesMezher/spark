// import { useEffect, useState } from "react";
import MainTitle from "../MainTitle/MainTitle"
import Swiper from "../Swiper/Swiper";
import Brush from "../Brush/Brush";
import { team } from "../../../const/staticData";

const Team = () => {
    return (
        <section className="main-container relative mt-10">
            <div className="absolute top-0 right-0">
                <MainTitle key={6} title={'Our Happy Family'} subtitle={'help you to build website companythat is modern, user friendly, good CEO, amd Clean design'}/>
            </div>
            <Brush position={'absolute min-w-[50rem] min-h-[50rem] right-[-40%] top-0 translate-y-[-50%]'}/>
            <Swiper team={team}/>
        </section>
    )
}

export default Team

