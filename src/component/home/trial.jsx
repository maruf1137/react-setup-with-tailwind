import HeadingTitle from "../headingTitle";

const Trial = () => {
  return (
    <div className="bg-white py-16">
      <div className="wrapper mx-auto max-w-7xl py-20 rounded-lg px-4 bg-custom-bg">
        <HeadingTitle
          title1={<>Start with a 30 day free trial</>}
          title2={<>Start with a 30 day free trial</>}
        />
        <div className="mt-6 flex items-center justify-center gap-x-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md text-white bg-dark border border-dark hover:text-dark hover:bg-transparent transition-all">
            Start for Free
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md border border-dark text-dark bg-white hover:bg-dark hover:text-white transition-all">
            See our plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trial;
