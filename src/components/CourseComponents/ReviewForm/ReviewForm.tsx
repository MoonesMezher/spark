// import { Rating } from "@material-tailwind/react"
import StarReviewRating from "../StarReviewRating/StarReviewRating"

const ReviewForm = () => {
    return (
        <form method="POST" onSubmit={() => 1} className="flex flex-col gap-3 max-[600px]:text-center">
            <label className="w-fit max-[600px]:mx-auto">
                <p className="mb-2">Your Rating: </p>
                <StarReviewRating/>
            </label>
            <label>
                <p className="mb-2">Your Review: </p>
                <textarea name="review" id="review" className="min-[601px]:ms-10 w-[20em] max-[600px]:w-full h-[5em] text-black p-2 outline-none rounded-[1px]" placeholder="Type Somthing...">
                </textarea>
            </label>
        </form>
    )
}

export default ReviewForm