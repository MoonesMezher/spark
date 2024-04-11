import { TInfoCourseCardFieldProps } from "../../../types"

const InfoCourseCardField = ({icon, filed, value}: TInfoCourseCardFieldProps) => {
    return (
        <p className="flex items-center gap-1 mb-2 text-[.9rem]">
            <span className="me-2 text-[1rem]">{icon}</span> 
            <div className="flex flex-wrap">
                {filed}: <span className={`text-__white_blue ${filed === 'Creator' && 'underline'}`}>{value}</span> 
            </div>
        </p>
    )
}

export default InfoCourseCardField