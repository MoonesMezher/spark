import { useState } from "react";

const LongText = ({ text, charactersNumber }: {text: string, charactersNumber: number}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    let truncatedText = text && (isExpanded ? text : text.slice(0, charactersNumber) + "...");    

    return (
        <div>
            <div className="text-__text_gray">{truncatedText}
                <div
                    className="text-__white_blue hover:underline ms-4 inline cursor-pointer"
                    onClick={toggleExpanded}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </div>
            </div>
        </div>
    );
};

export default LongText;