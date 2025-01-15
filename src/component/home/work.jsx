import HeadingTitle from "../headingTitle";

const workData = [
  {
    id: 1,
    img: "/public/images/home/work-img-1.png",
    title: "Interior Designers",
    desc: "Techstyles is the only platform that combines powerful project management",
  },
  {
    id: 2,
    img: "/public/images/home/work-img-2.png",
    title: "Architects",
    desc: "Techstyles is the only platform that combines powerful project management",
  },
  {
    id: 3,
    img: "/public/images/home/work-img-3.png",
    title: "Client Focused Business",
    desc: "Techstyles is the only platform that combines powerful project management",
  },
];

const Work = () => {
  return (
    <div className="bg-white">
      <div className="wrapper mx-auto max-w-7xl px-4 py-16">
        <HeadingTitle
          title1={<>For Studios That Deliver Exceptional Client Work</>}
          title2={<>For Studios That Deliver Exceptional Client Work</>}
          desc="Techstyles is the only platform that combines powerful project management and streamlined operations using AI, so you can so you can scale your design studio with confidence."
        />

        <div className="items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {workData.map((item) => {
            const { id, img, title, desc } = item;

            return (
              <div
                className="work-item bg-custom-bg p-6 rounded-[10px] "
                key={id}>
                <div className="img-box">
                  <img src={img} alt={title} className="w-full" />
                </div>
                <h5 className="mt-6 text-xl font-bold text-dark">{title}</h5>
                <p className="text-light mt-3">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
