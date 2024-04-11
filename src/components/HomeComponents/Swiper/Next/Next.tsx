import { IoIosArrowForward } from "react-icons/io"
import BtnClickLayout from "../BtnClickLayout/BtnClickLayout"

const Next = ({ onClick }: { onClick: () => any}) => {
    return (
        <BtnClickLayout key={0} element={<IoIosArrowForward/>} onClick={onClick} style={"right-[10%] max-[1030px]:right-0 top-[50%] translate-y-[-50%]"}/>
    )
}

export default Next