export default function Banner() {
    return (
      <div className="relative w-full p-3 text-white overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 via-sky-600/80 to-blue-800">
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Discover Norwich
          </h1>
          <p className="text-lg sm:text-2xl mx-auto max-w-3xl mb-6 opacity-80">
          Discover unique places, user experiences, and much more in Norwich.
        </p>
        </div>
      </div>
    );
  }
  