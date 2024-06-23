export const Buttons = ({ nextQuestion }) => {
    return(
        <div className="w-full flex max-sm:justify-center justify-end text-lg max-sm:text-base">
            <div className="w-4/5 flex gap-1 my-8 justify-between lg:w-[55%]">
                <button className="border-2 border-stone-200 font-semibold rounded-md px-5 py-2 hover:bg-gray-200"
                onClick={nextQuestion}>
                    Skip 
                </button>
                <button className="flex items-center bg-orange-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-orange-600/90"
                onClick={nextQuestion}> 
                    <span> Save & Next </span> 
                    <img className="h-5 w-5 sm:w-6 pt-1 pl-1" src="https://img.icons8.com/material/24/FFFFFF/arrow.png" alt="arrow"/>
                </button>
            </div>
        </div>
    )
}