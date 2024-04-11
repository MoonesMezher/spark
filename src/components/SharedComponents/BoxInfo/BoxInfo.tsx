import { TBoxInfoProps } from "../../../types"

const BoxInfo = ({ name, postion }: TBoxInfoProps) => {
    return (
        <div className={`bg-white px-8 py-3 max-[600px]:py-2 max-[600px]:px-4 absolute z-1 ${postion} text-black font-bold`}>{name}</div>
    )
}

export default BoxInfo