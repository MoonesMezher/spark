import InfoCourseCardField from "../InfoCourseCardField/InfoCourseCardField";
import BoxInfo from "../../SharedComponents/BoxInfo/BoxInfo";
import { fields } from "../../../const/staticData";
import { TInfoCourseCardProps } from "../../../types";

const InfoCourseCard = ({ data }: TInfoCourseCardProps) => {
    return (
        <div className="bg-__main_dark rounded-lg p-5 border-[1px] border-__white_blue border-solid relative basis-[30%] max-[768px]:w-full max-[768px]:order-2">
            <div className="mb-12">
                {fields?.map((e, i) => <InfoCourseCardField key={i} icon={e.icon} filed={e.filed} value={e.value}/>)}
            </div>
            {data.price === 0 && <BoxInfo name={'Free'} postion={'right-0 bottom-0'}/>}
        </div>
    )
}

export default InfoCourseCard