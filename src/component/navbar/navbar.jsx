import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [mblMenu, setmblMenu] = useState(false);
  const { pathname } = useLocation();

  const navData = [
    {
      id: 1,
      text: "Product",
      url: "#",
    },
    {
      id: 2,
      text: "About",
      url: "#",
    },
    {
      id: 3,
      text: "Resources",
      url: "#",
    },
    {
      id: 4,
      text: "Pricing",
      url: "#",
    },
  ];

  return (
    <>
      <div className="navbar bg-transparent">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-8 py-3">
          <div className="relative">
            <div className="flex-1 flex items-center justify-between gap-5">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className=""
                  src="/public/images/logo.png"
                  alt="Workflow"
                />
              </div>
              <div
                className={`lg:hidden overlay fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-[8] transition-all ${
                  mblMenu ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setmblMenu(false)}></div>
              <div
                className={`mobile-menu-transition fixed lg:relative top-0 left-0 w-full sm:w-1/2 lg:w-auto min-h-screen h-full lg:h-auto lg:min-h-min bg-white lg:bg-transparent flex flex-col gap-y-8 p-8 lg:p-0 z-10 lg:z-0 shadow-sm lg:shadow-none lg:translate-x-0 ${
                  mblMenu ? "translate-x-0" : "-translate-x-full"
                }`}>
                <button
                  className="flex lg:hidden items-center text-dark absolute top-2 right-2 hover:bg-dark hover:text-white h-8 w-8 rounded-full justify-center transition-all"
                  onClick={() => setmblMenu(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                    />
                  </svg>
                </button>
                <div className="flex-shrink-0 flex items-center lg:hidden">
                  <img
                    className=""
                    src="/public/images/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                  {navData.map((item) => {
                    const { id, text, url } = item;
                    return (
                      <a
                        key={id}
                        href={url}
                        className={`text-xl lg:text-base font-medium hover:text-dark ${
                          pathname === url ? "text-dark" : "text-lighter"
                        }`}>
                        {text}
                      </a>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 lg:hidden">
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-base font-medium rounded-md text-lighter hover:text-dark">
                    Login
                  </a> */}
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md text-white bg-dark">
                    Login
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md text-white bg-dark">
                    Start for free
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium rounded-md text-lighter hover:text-dark">
                  Login
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 text-base font-normal rounded-md text-white bg-dark">
                  Start for free
                </a>
              </div>
              <button
                className="flex lg:hidden items-center text-dark"
                onClick={() => setmblMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
