const TextareaInput = ({label,name,value,onChange}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold text-left mb-1 ml-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        className="w-full p-2 border rounded-lg focus:border-2 focus:border-amber-400"
        value={value}
        onChange={onChange}
        
      />
    </div>
  );
}

export default TextareaInput