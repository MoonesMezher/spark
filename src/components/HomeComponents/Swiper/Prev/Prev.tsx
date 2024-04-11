import { IoIosArrowBack } from "react-icons/io"
import BtnClickLayout from "../BtnClickLayout/BtnClickLayout"

const Prev = ({ onClick }: { onClick: () => any}) => {
    return (
        <BtnClickLayout key={1} element={<IoIosArrowBack/>} onClick={onClick} style={"left-[10%] max-[1030px]:left-[0] top-[50%] translate-y-[-50%]"}/>
    )
}

export default Prev