import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }
    e.target.submit();
  };

  return (
    <>
      <div
        name="Contact"
        className="w-full text-white bg-gradient-to-b from-gray-200 via-stone-50 to-gray-200 md:h-screen"
        >
                 <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
                 <div>
          <p className="inline text-4xl font-bold text-gray-700 border-b-4 border-gray-500">  
              Contact
            </p>
            <p className="py-6 text-gray-900">Let's get connect</p>
          </div>
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/bqonkgyb"
              method="POST"
              className="flex flex-col w-full md:w-1/2 gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border border-gray-400 rounded-sm rounded-md text-white focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border border-gray-400 rounded-sm text-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                rows="10"
                className="p-2 bg-transparent border border-gray-400 rounded-sm rounded-md text-white focus:outline-none"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className='flex items-center justify-center px-6 py-3 my-4 cursor-pointer group  bg-gradient-to-tl from-gray-700 via-gray-500  to-stone-700 rounded-xl w-full'>
                Send
              
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
