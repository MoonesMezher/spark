import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { TServiceCardProps } from "../../../types"

const ServiceCard = ({info, index}: TServiceCardProps) => {
    return (
        <div className={`basis-[100%] min-[2400px]:basis-[22%] rounded-lg py-5 ps-5 flex justify-between flex-1 overflow-hidden gap-5 h-[16em] ${index==1 || index==4 ? 'bg-__service_purple md:basis-[40%]' :'bg-__service_dark md:basis-[30%]'} `}>
            <div className="text-white flex flex-col gap-2">
                <div className="max-w-[3em]">
                    <img src={info?.icon} alt={info?.icon} className="max-w-[3em] h-full object-cover"/>
                </div>
                <h1 className="font-bold text-[1.5rem] min-[4000px]:whitespace-nowrap">{info?.title}</h1>
                <p className="text-[.9rem]">{[...info?.subtitle].map((e, i) => i < 30 && e )}</p>
                <Link to={info?.url} className="underline flex gap-1 items-center text-[.9rem] mt-1 hover:ms-1 duration-300">
                    Start with us <GoArrowUpRight/>
                </Link>
            </div>
            <div className="translate-y-[20px] max-w-[12em]">
                <img src={info?.img} alt={info?.img} className="w-full h-full object-fit" />
            </div>
        </div>
    )
}

export default ServiceCard