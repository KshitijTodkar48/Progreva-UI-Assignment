import { useState } from "react";

export const QuestionStatus = () => {
    const [isAttempted, setIsAttempted] = useState(true) ;
    return(
        <div className="text-lg flex flex-col gap-2 px-4">
            <div className="flex items-center">
                <input
                    type="radio"
                    id="attempted"
                    name="attempted"
                    value="attempted"
                    className="mr-2"
                    checked={!isAttempted}
                    onChange={(e) => { setIsAttempted(x => !x) }}
                />
                <label htmlFor="attempted" className="text-gray-700">
                    Attempted
                </label>
            </div>

            <div className="flex items-center">
                <input
                    type="radio"
                    id="notAttempted"
                    name="notAttempted"
                    value="notAttempted"
                    className="mr-2"
                    checked={isAttempted}
                    onChange={(e) => { setIsAttempted(x => !x) }}
                />
                <label htmlFor="notAttempted" className="text-gray-700">
                    Not Attempted
                </label>
            </div>
    </div>
    )
}