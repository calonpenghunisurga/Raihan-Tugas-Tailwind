import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="bg-gradient-to-r from-slate-600 via-purple-500 py-4 bg-opacity-95">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <ul className="flex rounded-lg">
                <li className="mr-2">
                  <a
                    className="text-white hover:text-gray-300 px-[10px] py-2 block"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="text-white hover:text-gray-300 px-4 py-2 block"
                    href="#"
                  >
                    Studio
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="text-white hover:text-gray-300 px-4 py-2 block"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    className="text-white hover:text-gray-300 px-4 py-2 block"
                    href="#"
                  >
                    Works
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center">
              <a
                href="#"
                className="bg-pink-700 text-slate-200 font-semibold py-2 px-4 rounded-full hover:animate-bounce"
              >
                Hire Now
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-white my-[200px] mx-[105px] animate-bounce">
          THINK. MAKE. <br /> Solve.
        </h1>
      </div>

      <div>
        <h4 className="text-pink-600 text-xl font-medium mx-[900px] ml-28 mt-[-150px]">
          {" "}
          - What we Do
        </h4>
      </div>

      <div>
        <h5 className="text-slate-100 text-base font-medium mx-[100px] ml-28 mt-[25px] space-y-4">
          {" "}
          We enjoy creating delightfully, We enjoy creating delightfully, We
          enjoy creating delightfully
        </h5>
      </div>

      <div>
        <br />
        <button
          type="button"
          className="bg-pink-600 hover:bg-green-700 text-white font-bold py-2 px-4 ml-28 rounded"
        >
          Learn More
        </button>
      </div>

      <div>
        <img
          src="elegant-man-standing-horse-ranch (1).jpg"
          alt=""
          className="h-auto max-w-lg mx-[950px] my-[-300px] border-solid border-[5px] border-black rounded-2xl"
        />
      </div>

      <div>
        <img
          src="1mei_purple_eagle.jpg"
          alt=""
          className="h-auto max-w-14 mx-[300px] absolute left-[-250px] top-[5px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
