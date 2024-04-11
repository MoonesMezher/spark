import { TBrushPorps } from "../../../types"

const Brush = ({ position }: TBrushPorps) => {
    return (
        <div className={`brush ${position} pointer-events-none z-0`}></div>
    )
}

export default Brush