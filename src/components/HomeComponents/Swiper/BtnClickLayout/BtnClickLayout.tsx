import { TSwiperBtnProps } from "../../../../types"

const BtnClickLayout = ({ onClick, element, style }: TSwiperBtnProps) => {
    return (
        <span className={`text-white w-[1.5em] h-[1.5em] rounded-full flex justify-center items-center cursor-pointer text-[2rem] absolute z-10 ${style} hover:bg-__white_blue duration-200 max-[767px]:hidden`} onClick={onClick}>
            { element }
        </span>
    )
}

export default BtnClickLayout