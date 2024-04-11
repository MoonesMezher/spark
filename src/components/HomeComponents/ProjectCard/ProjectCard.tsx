import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { TProjectCardProps } from "../../../types"

const ProjectCard = ({info, index}: TProjectCardProps) => {
    return (
        <div className={`basis-[100%] md:basis-[45%] min-[5500px]:basis-[22%] min-[560px]:min-w-[490px] flex-1 ${(index == 0 || index == 1) &&'border-b-[2px] border-__shadow_gray border-solid'} min-[5500px]:border-none max-[1280px]:border-none py-10`}>
            <div className="relative min-[560px]:overflow-hidden rounded-[25px] gradient-project-card p-10 max-[559px]:pb-0 min-[560px]:h-[13em] flex flex-wrap z-10">
                <div className="min-[560px]:w-[50%] max-[559px]:text-center">
                    <span className="px-2 py-1 rounded-[30px] bg-transparent border-[2px] border-solid border-__purple text-[.7rem] font-bold w-fit">{info.type}</span>
                    <h1 className="font-bold text-[2rem] mb-3 mt-2">{info.title}</h1>
                    <p className="text-__shadow_gray">{info.subtitle}</p>
                </div>
                <div className="overflow-hidden w-[15em] min-[560px]:absolute bottom-0 right-0 min-[560px]:rotate-1 max-[559px]:mx-auto max-[559px]:mt-3">
                    <img src={info.img} alt={info.img} className="w-full object-cover"/>
                </div>
                <Link to={info.url} className="bg-white rounded-full p-2 flex justify-center items-center w-[2em] h-[2em] absolute right-3 top-3 cursor-pointer shadow-sm shadow-__shadow_gray">
                    <FiArrowUpRight className="text-black font-extrabold"/>
                </Link>
            </div>
            <div className="mt-3 w-full">
                <h1 className="font-bold text-[2rem] text-white">{info.title}</h1>
                <p className="text-white mt-1">{info.discription}</p>
            </div>
        </div>
    )
}

export default ProjectCard