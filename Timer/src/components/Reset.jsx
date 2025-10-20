
const reset = ({ resetTimer }) => {
  return (
    <div>
      <button
        onClick={resetTimer}
        className="mt-4 bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-500 ml-2"
      >
        Reset
      </button>
    </div>
  );
};

export default reset