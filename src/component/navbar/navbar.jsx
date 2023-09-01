const Navbar = () => {
  const navData = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative py-3">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navData.map((item) => {
                  const { id, text, url } = item;
                  return (
                    <a
                      key={id}
                      href={url}
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 active:border-b-2 text-sm font-medium"
                    >
                      {text}
                    </a>
                  );
                })}
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Button text
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
