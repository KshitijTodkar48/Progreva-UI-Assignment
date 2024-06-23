export const Options = ({ id, value, option, name, selectedOption, handleOptionChange }) => {
  return (
    <div className="flex items-center text-xl">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="mr-2 mt-[2px]"
        checked={selectedOption === value}
        onChange={handleOptionChange}
      />
      <label htmlFor={id} className="text-gray-700">
        {option}. {` ${value}`}
      </label>
    </div>
  );
};
