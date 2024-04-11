import { TCourseInfoSectionThemeProps } from "../../../types"

const CourseInfoSectionTheme = ({ title, children } : TCourseInfoSectionThemeProps ) => {
    return (
        <div className="mt-5 max-[399px]:text-center">
            <h1 className="text-__white_blue font-bold text-[1.5rem] underline mb-3">{title}</h1>
            <div className="px-0 min-[400px]:px-5 min-[600px]:px-10">{children}</div>
        </div>
    )
}

export default CourseInfoSectionTheme