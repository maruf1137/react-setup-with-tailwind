const platformsData = [
  {
    id: 1,
    img: "/public/images/home/platform-icon-1.png",
    title: "Simplify Your Workflow",
    desc: "Say goodbye to juggling multiple tools. Our all-in-one platform streamlines your entire business process, from lead generation to project completion and financial management.",
  },
  {
    id: 2,
    img: "/public/images/home/platform-icon-2.png",
    title: "Built for Design",
    desc: "Unlike complex enterprise solutions, our platform is designed with the needs of small businesses and studios in mind. Enjoy a user-friendly interface that doesn't sacrifice powerful functionality.",
  },
  {
    id: 3,
    img: "/public/images/home/platform-icon-3.png",
    title: "AI-Powered Efficiency",
    desc: "Harness the power of artificial intelligence to automate routine tasks, gain valuable insights, and make data-driven decisions that propel your business forward.",
  },
  {
    id: 4,
    img: "/public/images/home/platform-icon-4.png",
    title: "Client-Centric Approach",
    desc: "Enhance your client relationships with a dedicated portal, seamless communication tools, and professional project management capabilities all in one place.",
  },
];

const Platform = () => {
  return (
    <div className="bg-dark text-white">
      <div className="wrapper mx-auto max-w-7xl px-4 py-16">
        {/* titiel area */}
        <div className="title-area grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 gap-x-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:!leading-[64px] font-bold text-white text-center lg:text-left">
            Why interior designers and creative studios love our platform
          </h2>
          <div className="img-box mx-auto">
            <img src="/public/images/home/platform-img.png" alt="" />
          </div>
        </div>

        {/* items area */}
        <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {platformsData.map((item) => {
            const { id, img, title, desc } = item;

            return (
              <div className="item" key={id}>
                <div className="img-box">
                  <img src={img} alt={title} />
                </div>
                <h5 className="mt-4 text-2xl font-medium text-white">
                  {title}
                </h5>
                <p className="text-white mt-3">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Platform;
