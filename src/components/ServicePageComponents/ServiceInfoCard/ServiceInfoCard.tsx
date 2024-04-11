import { useEffect, useState } from "react";
import { TServiceInfoCardProps } from "../../../types";

const ServiceInfoCard = ({info, index}: TServiceInfoCardProps) => {
    const [flexReverse, setFlexReverse] = useState<boolean>(false);
    const [removeButton, setRemoveButton] = useState<boolean>(false);

    const i: number = index+1;

    useEffect(() => {
        setFlexReverse(i%2 === 0);
    } , []);

    return (
        <div className={`flex justify-between gap-10 ${flexReverse && 'md:flex-row-reverse'} max-[767px]:flex-col max-[500px]:text-center`}>
            {i !== 1 && <hr className="md:hidden mb-10"/>}
            <div className="flex-1 overflow-hidden rounded-md">
                <img src={info.img} alt={info.img} className="object-cover w-full"/>
            </div>
            <div className="basis-[50%] text-white">
                <h1 className="font-bold text-[1.2rem]">{i}. {info.title}</h1>
                <p className="mt-5 leading-6">{info.discription}</p>
                {i == 1 && 
                <div className={`text-__white_blue py-2 px-4 bg-__shadow_gray cursor-pointer rounded-md mt-5 ms-5 w-fit duration-1000 ${removeButton && 'opacity-0 translate-x-[-100%]'}`}
                    onClick={() => setRemoveButton(true)}
                >Got-it</div>
                }
            </div>
        </div>
    )
}

export default ServiceInfoCard