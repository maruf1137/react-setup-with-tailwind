const Hero = () => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="wrapper text-center overflow-visible">
        <div className="bg-white rounded-full py-1 px-4 text-sm inline-flex items-center justify-center gap-1">
          <img src="/public/images/stars.png" alt="" />
          <p className="text-custom-primary">{"4.9 {6k+Reviews}"}</p>
          <p>by Trustpoilt</p>
        </div>
        <h1 className="hidden lg:block text-4xl sm:text-5xl lg:text-[56px] lg:!leading-[64px] font-bold text-dark">
          Complete business management <br /> solution for client success
        </h1>
        <h1 className="lg:hidden text-4xl sm:text-5xl lg:text-[56px] lg:!leading-[64px] font-bold text-dark">
          Complete business management solution for client success
        </h1>
        <p className="mt-3 sm:mt-4 lg:mt-5 text-center text-base text-light">
          The all-in-one operating system for studios managing client projects,
          profitably.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-y-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 mt-3 sm:mt-4 lg:mt-5">
          <p className="flex items-center gap-2 text-lighter text-base">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                opacity="0.3"
                cx="10"
                cy="10"
                r="8.6"
                stroke="black"
                strokeWidth="1.2"
              />
              <path
                d="M7 10.5L9 12.5L13.5 8"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            No credit card required
          </p>
          <p className="flex items-center gap-2 text-lighter text-base">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                opacity="0.3"
                cx="10"
                cy="10"
                r="8.6"
                stroke="black"
                strokeWidth="1.2"
              />
              <path
                d="M7 10.5L9 12.5L13.5 8"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            No credit card required
          </p>
        </div>
        <form
          action="#"
          className="flex items-center justify-between max-w-[464px] mx-auto w-full mt-3 sm:mt-4 lg:mt-5 bg-white p-1 rounded-md">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            className="input w-full bg-transparent h-full pl-5 py-3 text-base placeholder:text-lighter placeholder:opacity-70 border-none outline-none focus:border-none"
          />
          <button className="flex max-w-[138px] w-full items-center justify-center py-3 text-base font-normal rounded-md text-white bg-dark">
            Start for free
          </button>
        </form>
        <div className="window mt-10">
          <img src="/public/images/home/window.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
