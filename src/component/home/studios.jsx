import { useState } from "react";
import HeadingTitle from "../headingTitle";

const tabsBtns = [
  {
    id: 1,
    title: "CRM",
    value: "/public/images/home/studio-window.png",
  },
  {
    id: 2,
    title: "Project Management",
    value: "/public/images/home/studio-window.png",
  },
  {
    id: 3,
    title: "Finance",
    value: "/public/images/home/studio-window.png",
  },
  {
    id: 4,
    title: "Office",
    value: "/public/images/home/studio-window.png",
  },
];

const Studios = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="wrapper">
        <HeadingTitle
          title1={
            <>
              Built for designers, loved by <br /> studios
            </>
          }
          title2={<>Built for designers, loved by studios</>}
          desc="Effortless management for designers, powered by AI"
        />
        <div className="tabs mt-16">
          <div className="tabs-btns flex justify-start sm:justify-center items-center gap-3 overflow-x-auto">
            {tabsBtns?.map(({ id, title }) => {
              return (
                <button
                  className={`btn flex items-center px-3 py-2 text-base font-medium rounded-[10px] text-dark border border-white whitespace-nowrap text-ellipsis ${
                    id == activeTab ? "bg-white" : "bg-[#F6F5F0]"
                  }`}
                  key={id}
                  onClick={() => setActiveTab(id)}>
                  {title}
                </button>
              );
            })}
          </div>

          <div className="tab-content mt-8">
            {/* <div className="image-box">
              <img src="/public/images/home/studio-window.png" alt="" />
            </div> */}

            {tabsBtns
              ?.filter((item) => item.id == activeTab)
              ?.map(({ value, id }) => {
                return (
                  <div className="image-box" key={id}>
                    <img src={value} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studios;
