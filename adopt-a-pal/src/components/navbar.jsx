import { React } from "react";
import { Link } from "react-router-dom";
import NewPost from "../routes/dashboard/newpost";

function NavBar({ currentPage, showNewPost }) {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 right-0 bg-[#FFDDD2]">
        <div className="max-w-[80vw] mx-auto my-2 flex flex-row justify-between items-center">
          <div className="left flex items-center font-bold text-taupe text-2xl">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                {/* LOGO & TITLE */}
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.07 10.74C49.71 4.09998 38.2 4.24998 32 11C30.4277 9.3523 28.5356 8.04299 26.4395 7.15228C24.3434 6.26157 22.0875 5.80821 19.81 5.81998C5.00002 5.69998 -2.60998 24.11 7.93002 34.52L31.3 57.89C31.393 57.9837 31.5036 58.0581 31.6254 58.1089C31.7473 58.1596 31.878 58.1858 32.01 58.1858C32.142 58.1858 32.2727 58.1596 32.3946 58.1089C32.5165 58.0581 32.6271 57.9837 32.72 57.89L56.07 34.52C59.2076 31.3582 60.9683 27.0844 60.9683 22.63C60.9683 18.1756 59.2076 13.9018 56.07 10.74V10.74ZM54.65 33.1L32 55.77L10.35 34.11L9.35002 33.11C7.96765 31.7331 6.87077 30.0967 6.12233 28.2949C5.37389 26.493 4.98862 24.5611 4.98862 22.61C4.98862 20.6589 5.37389 18.727 6.12233 16.9251C6.87077 15.1232 7.96765 13.4869 9.35002 12.11C15.43 5.88998 25.75 6.54998 31.35 13.11C31.5374 13.2962 31.7908 13.4008 32.055 13.4008C32.3192 13.4008 32.5727 13.2962 32.76 13.11C38.25 6.52998 48.67 5.89998 54.69 12.11C57.4638 14.901 59.0173 18.6783 59.0098 22.6133C59.0023 26.5482 57.4344 30.3195 54.65 33.1V33.1Z"
                    fill="#714949"
                  />
                  <path
                    d="M36.79 30.49C35.4923 29.2723 33.7796 28.5945 32 28.5945C30.2204 28.5945 28.5077 29.2723 27.21 30.49L21.81 35.6C18.46 38.6 20.81 44.49 25.3 44.36C27.64 44.36 29.53 43.14 32 43.18C34.47 43.22 36.44 44.18 38.7 44.36C43.19 44.49 45.54 38.58 42.19 35.6L36.79 30.49ZM41.55 40.42C41.3282 41.0087 40.9269 41.5127 40.4029 41.8609C39.8789 42.209 39.2587 42.3836 38.63 42.36C36.48 42.03 34.63 41.16 32 41.18C29.37 41.2 27.55 42.28 25.3 42.36C24.6811 42.3673 24.0745 42.1868 23.5603 41.8423C23.0461 41.4978 22.6485 41.0054 22.42 40.4302C22.1914 39.855 22.1426 39.224 22.2801 38.6205C22.4176 38.017 22.7349 37.4694 23.19 37.05L28.59 31.94C29.5157 31.0768 30.7343 30.5967 32 30.5967C33.2657 30.5967 34.4843 31.0768 35.41 31.94L40.81 37.05C41.2652 37.4673 41.5805 38.0148 41.7129 38.618C41.8454 39.2211 41.7885 39.8504 41.55 40.42Z"
                    fill="#714949"
                  />
                  <path
                    d="M45.88 22.87C41.06 22.13 38.94 31.68 43.62 33.04C48.14 34.05 50.7 24.21 45.88 22.87ZM46.35 28.31C45.8 30.59 44.06 32.26 43.23 30.12C42.63 28.47 43.36 25.19 45.3 24.8C46.6 25.08 46.6 27.08 46.35 28.31V28.31Z"
                    fill="#714949"
                  />
                  <path
                    d="M36.83 27.13C42.45 26.99 42.45 15.74 36.83 15.6C31.21 15.74 31.21 27 36.83 27.13ZM36.83 17.6C39.83 17.82 39.83 24.92 36.83 25.13C33.87 24.91 33.87 17.82 36.83 17.6Z"
                    fill="#714949"
                  />
                  <path
                    d="M22.66 30.79C23.0158 29.6137 23.0628 28.3657 22.7966 27.166C22.5304 25.9663 21.9599 24.8553 21.14 23.94C20.7915 23.4896 20.322 23.1477 19.7864 22.9543C19.2508 22.7609 18.6713 22.7239 18.1154 22.8476C17.5596 22.9714 17.0505 23.2508 16.6475 23.6532C16.2446 24.0556 15.9645 24.5643 15.84 25.12C14.63 28.01 16.77 33.23 19.79 33.12C20.4547 33.0897 21.0922 32.8471 21.6087 32.4277C22.1253 32.0083 22.4938 31.4343 22.66 30.79V30.79ZM17.66 28.31C17.41 27.08 17.41 25.08 18.71 24.8C20.65 25.19 21.38 28.47 20.78 30.12C19.94 32.26 18.2 30.59 17.65 28.31H17.66Z"
                    fill="#714949"
                  />
                  <path
                    d="M27.17 27.13C32.79 26.99 32.79 15.74 27.17 15.6C21.55 15.74 21.55 27 27.17 27.13ZM27.17 17.6C30.17 17.82 30.17 24.92 27.17 25.13C24.21 24.91 24.21 17.82 27.17 17.6Z"
                    fill="#714949"
                  />
                </svg>
                <span className="inline-block align-baseline text-taupe">
                  Adopt-a-Pal
                </span>
              </div>

              {/* NAVIGATION LINKS -- Changes highlighted navigation link depending on current page*/}
              <div className="right menu flex text-2xl font-medium">
                {/* CURRENT PAGE = DASHBOARD */}
                {currentPage === "dashboard" && (
                  <ul className="hidden md:flex">
                    <li className="text-[#FA8C01] list-none mx-3">
                      <Link to="/dashboard">Home</Link>
                    </li>
                    <li className="text-[#714949] hover:text-[#FA8C01] list-none mx-3">
                      <Link to="/browse">Browse</Link>
                    </li>
                  </ul>
                )}

                {/* CURRENT PAGE = BROWSE */}
                {currentPage === "browse" && (
                  <ul className="hidden md:flex">
                    <li className="text-[#714949] hover:text-[#FA8C01] list-none mx-3">
                      <Link to="/dashboard">Home</Link>
                    </li>
                    <li className="text-[#FA8C01] list-none mx-3">
                      <Link to="/browse">Browse</Link>
                    </li>
                  </ul>
                )}

                {/* CURRENT PAGE = ADMIN DASHBOARD */}
                {currentPage === "admin" && (
                  <ul className="hidden md:flex">
                    <li className="text-[#FA8C01] list-none mx-3">
                      <Link to="/dashboard">All Posts</Link>
                    </li>
                    <li className="text-[#714949] hover:text-[#FA8C01] list-none mx-3">
                      <Link
                        onClick={() => {
                          showNewPost();
                        }}
                      >
                        New Post
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* LOGOUT BUTTON */}
          <div className="right menu text-2xl font-medium md:flex hidden">
            <li className="text-[#714949] hover:text-[#FA8C01] list-none mx-3">
              <Link to="/">Logout</Link>
            </li>
          </div>

          {/* NAVBAR TRANSFORMS TO DROP DOWN LINKS  */}
          <div className="right menu md:hidden flex justify-end dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="text-[#714949] hover:text-[#FA8C01] text-2xl font-medium list-none m-1"
            >
              <svg
                height="30"
                viewBox="0 0 24 24"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#714949"
                  class="heroicon-ui"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg rounded-[20px] bg-off-white text-brown w-52"
            >
              {currentPage === "admin" ? (
                <>
                  <li className="">
                    <Link
                      to="/dashboard"
                      className="font-medium text-xl text-brown"
                    >
                      All Posts
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      onClick={() => {}}
                      className="font-medium text-xl text-brown"
                    >
                      New Post
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <Link
                      to="/dashboard"
                      className="font-medium text-xl text-brown"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/browse"
                      className="font-medium text-xl text-brown"
                    >
                      Browse
                    </Link>
                  </li>
                </>
              )}
              <li className="">
                <Link to="/" className="font-medium text-xl text-brown">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
