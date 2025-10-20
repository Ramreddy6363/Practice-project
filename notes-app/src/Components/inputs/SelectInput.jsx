const SelectInput = ({label,name,value,onChange,options}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold text-left mb-1 ml-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full p-2 border rounded-lg focus:border-2 focus:border-amber-400 focus:outline-none focus:ring-0"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput