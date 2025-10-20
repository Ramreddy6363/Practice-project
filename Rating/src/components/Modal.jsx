
const Modal = ({isOpen,onClose,rating}) => {
    if (!isOpen) {
        return null;
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Thank You</h2>
        <p className="mb-4">
          You rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button
          className="p-2 text-xl bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal