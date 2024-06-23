import { Progress } from "flowbite-react";

export const ProgressBar = ({ currentQueNo }) => {
  return (
    <div className="p-5">
        <div className="text-3xl text-end pr-1 pb-3">
            Online Test
        </div>

        <Progress progress={currentQueNo * 5} />

        <div className="text-base font-semibold text-gray-700 flex justify-end items-center pr-1 pt-1">
          <img className="h-5 w-5 mt-[1px]" src="https://img.icons8.com/?size=100&id=m0dE6J92K2ui&format=png&color=000000" alt="timer" />  
          <span>Time left: 44:55</span>
        </div>
    </div>
  );
}
