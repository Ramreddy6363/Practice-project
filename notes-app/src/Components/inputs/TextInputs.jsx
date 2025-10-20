const TextInputs = ({label,name,value,onchange,required=false}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block font-semibold text-left mb-1 ml-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg focus:border-2 focus:border-amber-400"
        value={value}
        onChange={onchange}
        required = {required}
      />
    </div>
  );
}

export default TextInputs;