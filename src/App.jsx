function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-4 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6">
        <img
          className="h-40 mx-auto rounded-full ring-4 ring-gray-300 sm:mx-0 sm:flex-shrink-0 hover:scale-105 duration-500"
          src="/hosen.png"
          alt="hosen"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Md Kamal Hosen</p>
            <p className="text-gray-500 font-medium">Web Developer</p>
          </div>
          <button className="px-4 py-1 text-sm rounded-full border border-gray-400 text-fuchsia-600 hover:border-transparent hover:text-white hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-1">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
