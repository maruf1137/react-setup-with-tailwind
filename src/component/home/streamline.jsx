import HeadingTitle from "../headingTitle";

const streamlineData = [
  {
    id: 1,
    theme: "#C5E7D9",
    subtitle: "Project Management",
    title: "Plan, collaborate, and deliver every project phase with ease.",
    img: "/public/images/home/streamline-img-1.png",
    description: {
      list: [
        "Customizable workflows for any project.",
        "Board, Calendar, and Timeline views.",
        "Real-time collaboration for your team and clients.",
      ],
    },
    startBtnUrl: "#",
    learnMoreBtnUrl: "#",
  },
  {
    id: 2,
    theme: "#C5E7D9",
    subtitle: "Task Management",
    title: "Automate your team’s workflow and hit every milestone.",
    img: "/public/images/home/streamline-img-2.png",
    description: {
      list: [
        "Assign and prioritise tasks with deadlines.",
        "Customise workflows with phases, tasks, and sub-tasks.",
        "Monitor progress in Board, List, and Calendar views.",
        "Set reminders and notifications to keep your team on track.",
      ],
    },
    startBtnUrl: "#",
    learnMoreBtnUrl: "#",
  },
  {
    id: 3,
    theme: "#DAEAFD",
    subtitle: "Collaborative Design Space",
    title: "Bring ideas to life, from moodboards to technical drawings.",
    img: "/public/images/home/streamline-img-3.png",
    description: {
      list: [
        "Create and organise all design assets.",
        "Collect client feedback seamlessly.",
        "Centralised vision gallery for easy access.",
      ],
    },
    startBtnUrl: "#",
    learnMoreBtnUrl: "#",
  },
  {
    id: 4,
    theme: "#A8E2EC",
    subtitle: "Procurement",
    title: "Manage orders and deadlines without missing a step.",
    img: "/public/images/home/streamline-img-4.png",
    description: {
      list: [
        "Track and organise procurement by room or project.",
        "Monitor delivery schedules in one view.",
        "Centralised FF&E with client approval.",
      ],
    },
    startBtnUrl: "#",
    learnMoreBtnUrl: "#",
  },
  {
    id: 5,
    theme: "#CEC8EA",
    subtitle: "Smarter Financial Tracking",
    title: "Stay on top of budgets and payments – no spreadsheets needed.",
    img: "/public/images/home/streamline-img-5.png",
    description: {
      list: [
        "Track invoices, budgets, and procurement.",
        "Real-time insights into spending",
        "Auto reminders for overdue, due and paid",
      ],
    },
    startBtnUrl: "#",
    learnMoreBtnUrl: "#",
  },
];

const Streamline = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="wrapper">
        <HeadingTitle
          title1={<>Streamline every aspect of your design business</>}
          title2={<>Streamline every aspect of your design business</>}
          desc="By managing leads, projects, resources, finances, and reporting in a single system."
        />

        <div className="">
          {streamlineData.map((item) => {
            const {
              id,
              subtitle,
              title,
              description,
              theme,
              startBtnUrl,
              learnMoreBtnUrl,
              img,
            } = item;

            return (
              <div
                className="items flex flex-col lg:flex-row items-center justify-between gap-x-20 gap-y-10 py-16"
                key={id}>
                {item.id % 2 == 0 && (
                  <div className="img-area w-full hidden lg:block">
                    <img
                      src={img}
                      className="w-full rounded-lg shadow-lg"
                      alt={title}
                    />
                  </div>
                )}

                <div className="content flex flex-col items-center lg:items-start text-left max-w-[815px] lg:max-w-[445px] w-full">
                  <div
                    className={`inline-block text-lg lg:text-xl font-medium rounded-md py-3 px-4 bg-[${theme}]`}>
                    {subtitle}
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:leading-[48px] lg:text-[40px] mt-5 w-full text-dark font-bold text-center lg:text-left">
                    {title}
                  </h3>
                  <div className="img-area w-full lg:hidden max-w-[450px] mt-5">
                    <img
                      src={img}
                      className="w-full rounded-lg shadow-lg"
                      alt={title}
                    />
                  </div>
                  <ul className="mt-5 space-y-2 text-dark text-base sm:text-lg lg:list-disc pl-5 text-center lg:text-left">
                    {description?.list.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ul>
                  <div className="mt-8 flex items-center gap-x-4">
                    <a
                      href={startBtnUrl}
                      className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md text-white bg-dark border border-dark hover:text-dark hover:bg-transparent transition-all">
                      Start for Free
                    </a>
                    <a
                      href={learnMoreBtnUrl}
                      className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md border border-dark text-dark bg-transparent hover:bg-dark hover:text-white transition-all">
                      Learn More
                    </a>
                  </div>
                </div>

                {item.id % 2 !== 0 && (
                  <div className="hidden lg:block img-area w-full">
                    <img
                      src={img}
                      className="w-full rounded-lg shadow-lg"
                      alt={title}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Streamline;
