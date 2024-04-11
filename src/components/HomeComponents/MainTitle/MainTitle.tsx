import { TMainTitleProps } from "../../../types"

const MainTitle = ({ title, subtitle, purple } : TMainTitleProps ) => {
    return (
        <div className="max-[450px]:text-center relative z-10">
            <h1 className={`${purple?'gradient-title-purple' :'gradient-title'} text-3xl md:text-6xl leading-tight font-ABeeZee`}>{title.split('.').map((e, i) => <>{e} {i==0 && <br/>}</>)}</h1>
            <p className="mt-5 text-white text-sm max-w-[30em]">{subtitle}</p>
        </div>
    )
}

export default MainTitle