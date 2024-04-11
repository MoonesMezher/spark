import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarsRating = ({ rating }: { rating: number }) => {
    let [filledStars, setFilledStars] = useState(0);
    let [hasHalfStar, setHasHalfStar] = useState(false);

    useEffect(() => {
        if(rating) {
            setFilledStars(Math.floor(rating));
            setHasHalfStar(rating % 1 !== 0);
        }
    }, []);

    return (
        <div className="flex gap-1 justify-center items-center">
            {[...Array(filledStars)] && [...Array(filledStars)]?.map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-[1rem] md:text-[1.2rem]" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 text-[1rem] md:text-[1.2rem]" />}
        </div>
    );
};

export default StarsRating;