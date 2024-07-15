export default function Contact(){
    return(
        <>
        <div name="Contact"
                 className="w-full h-screen bg-gradient-to-b from-gray-800 to-black "> 
                <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center  h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Contact</p>
                        <p className="py-6">Let's get connect</p>
                    </div>
                    <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/bqonkgyb" method="POST" className="flex flex-col w-full md:w-1/2 gap-3">
                        <input type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                        <input type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                        <textarea 
                            name ="message" 
                            rows="10" 
                            className ="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            placeholder = "Enter your message">
                        </textarea>
                        <button 
                            className="text-white bg-gradient-to-t from-cyan-500 to-blue-500 px-5 py-3 mx-auto flex w-full justify-center items-center  rounded-md hover:scale-110 duration-300"
                        >
                        Let's Connect
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}