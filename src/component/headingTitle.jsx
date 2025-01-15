// eslint-disable-next-line react/prop-types
const HeadingTitle = ({ title1 = "", title2 = "", desc = "" }) => {
  return (
    <div className="max-w-[815px] mx-auto text-center">
      <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl lg:!leading-[64px] font-bold text-dark">
        {title1}
      </h2>
      <h2 className="lg:hidden text-3xl sm:text-4xl lg:text-5xl lg:!leading-[64px] font-bold text-dark">
        {title2}
      </h2>
      {desc && (
        <p className="mt-3 sm:mt-4 lg:mt-5 text-center text-base text-light">
          {desc}
        </p>
      )}
    </div>
  );
};

export default HeadingTitle;
