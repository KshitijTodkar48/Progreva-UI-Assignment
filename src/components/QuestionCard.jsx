import { Options } from "./Options";
import { useState } from "react";

export const QuestionCard = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
       <div>
           <div className="relative p-6 bg-white border-2 border-stone-200 rounded-md">
            <div className="absolute -top-4 left-[15%] bg-white px-2 text-gray-700 text-2xl font-semibold">
                Question
            </div>
            <div className="mt-4">
                <p className="text-xl font-medium text-gray-900 mb-4">
                  { question ? <> {question.id + '.'} {question.question} </> : <></> }
                </p>
                <form className="space-y-4">
                    {
                        question?.options.map((option) => 
                            <Options key={option.id} id={option.id} value={option.value} option={option.option} 
                                name={`question-${question.id}`} 
                                selectedOption={selectedOption}
                                handleOptionChange={handleOptionChange} 
                            />
                        )
                    }
                </form>
                </div>
            </div>
           
       </div>
    );
};