import { useState } from "react";
import star from "./../assets/star.png"
import Modal from "./Modal"

const Rating = () => {
  const [Rating, setRating] = useState(0);
const [Hover, setHover] = useState(0)
const  [Submit, setSubmit] = useState()
const feedbackMessage = ["Terrible","Poor","Fair","Good","Excellent"]
  let stars = Array.from({length:5},(_,i) => i+1)

  const handleSubmit = () => {
    if (Rating > 0) {
      setSubmit(true);      
    }
  }
const closeModal = () => {
setSubmit(false)
setRating(0)
setHover(0)
} 

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <section className="bg-white text-center p-5 rounded-md">
          <h2 className="p-4 rounded-md text-3xl font-semibold">
            Rate your experience
          </h2>
          <div>
            {stars.map((star) => (
              <span
                onClick={() => setRating(star)}
                onMouseOver={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`p-2 text-4xl text-gray-400 cursor-pointer ${
                  star <= (Hover || Rating) ? ' text-orange-400' : ' '
                }`}
                key={star}
              >
                {'\u2605'}
              </span>
            ))}
          </div>
          {Rating > 0 && <p>{feedbackMessage[Rating - 1]}</p>}
          <button
            className="px-4 py-1 mt-2 border border-black bg-blue-600 text-white text-xl rounded"
            onClick={handleSubmit}
            disabled={Rating === 0}
          >
            Submit
          </button>
           <Modal isOpen={Submit} onClose={closeModal} rating={Rating}/>
        </section>
      </div>
    </>
  );
  
};

export default Rating;
