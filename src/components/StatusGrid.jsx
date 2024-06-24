import { QuestionStatus } from "./QuestionStatus";

export const StatusGrid = () => {
    const totalQuestions = 50;
    const questionsArray = Array.from({ length: totalQuestions }, (_, i) => i + 1);
    return(
        <div>
            <div className="bg-white rounded-md border-2 border-stone-200 w-full mb-4">
                <div className="text-gray-700 text-xl font-semibold bg-stone-200 text-center py-2">Questions Status</div>
                <div className="grid max-md:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 p-4">
                    {questionsArray.map((number) => (
                    <div key={number} className="flex items-center justify-center">
                        <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full border-2 border-stone-300 text-gray-700">
                        {number}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <QuestionStatus />
        </div>
    )
}