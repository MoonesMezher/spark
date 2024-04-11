import { TBorderDesignProps } from "../../../types"

const BorderDesign = ({ position }: TBorderDesignProps) => {
    return (
        <div className={`bg-transparent absolute border-[2px] ${position} z-[0] border-__white_blue rounded-[50px]`}/>
    )
}

export default BorderDesign