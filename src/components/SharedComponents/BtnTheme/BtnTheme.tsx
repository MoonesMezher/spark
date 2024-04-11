import { TBtnThemeProps } from '../../../types'
import './hoverStryle.css'

const BtnTheme = ({ title, style, children } : TBtnThemeProps ) => {
    return (
        <div className={`btn bg-white max-[767px]:text-[.9rem] rounded-[30px] p-3 px-5 w-fit text-black flex gap-3 items-center justify-center mx-auto cursor-pointer relative z-[10] overflow-hidden ${style}`}>
            <div className="w-full h-full absolute left-[-100%] top-0 bg-__white_blue duration-300 z-[-1]"></div>
            {title} {children}
        </div>
    )
}

export default BtnTheme