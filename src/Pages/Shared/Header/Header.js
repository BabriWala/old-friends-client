import React, { useContext, useState } from "react";
import Logo from "../../../Assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
export default function Header() {
  const { user, logOut, currentUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {});
  };

  // console.log(user , 'from header');

  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full bg-white hidden xl:block shadow">
          <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
            <div className="flex items-center">
              <div className="mr-10 flex items-center">
                <img className=" w-10" src={Logo} alt="Logo" />
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                  Old Friends
                </h3>
              </div>
              <ul className="hidden xl:flex items-center h-full">
                <Link
                  to={"/"}
                  className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out"
                >
                  Home
                </Link>
                <Link
                  to={"/blog"}
                  className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out"
                >
                  Blog
                </Link>

                <div className="h-full xl:flex items-center justify-end">
                  <div className="h-full flex">
                    <div
                      className="flex items-center relative cursor-pointer"
                      onClick={() => setDropDown(!dropDown)}
                    >
                      {dropDown && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className=" items-center">
                              {currentUser?.role === "buyer" && (
                                <>
                                  <Link
                                    to={"/myOrders"}
                                    className="border p-2 rounded hover:bg-slate-100 cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out"
                                  >
                                    My Orders
                                  </Link>
                                </>
                              )}
                              {currentUser?.role === "admin" && (
                                <>
                                  <Link
                                    to={"/allBuyers"}
                                    className="cursor-pointer mb-3 border p-2 rounded hover:bg-slate-100 h-full flex items-center text-sm hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out"
                                  >
                                    All Buyers
                                  </Link>
                                  <Link
                                    to={"/allSellers"}
                                    className="cursor-pointer mb-3 border p-2 rounded hover:bg-slate-100 h-full flex items-center text-sm hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out"
                                  >
                                    All Sellers
                                  </Link>
                                  <Link
                                    to={"/reportedItems"}
                                    className="cursor-pointer border p-2 rounded hover:bg-slate-100 h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out"
                                  >
                                    Reported Items
                                  </Link>
                                </>
                              )}
                              {currentUser?.role === "seller" && (
                                <>
                                  <Link
                                    to={"/addAProduct"}
                                    className=" mb-3 border p-2 rounded hover:bg-slate-100 cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out"
                                  >
                                    Add a Product
                                  </Link>
                                  <Link
                                    to={"/myBuyers"}
                                    className=" border p-2 rounded hover:bg-slate-100 cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out"
                                  >
                                    My Buyers
                                  </Link>
                                </>
                              )}
                            </div>
                          </li>
                        </ul>
                      )}

                      <span
                        to={"/dashboard"}
                        className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out"
                      >
                        Dashboard
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div className="h-full hidden xl:flex items-center justify-end">
              {user?.uid ? (
                <div className="h-full flex">
                  <div
                    className="flex items-center pl-8 relative cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <div className="flex items-center">
                            <span onClick={handleLogOut} className="ml-2">
                              Log Out
                            </span>
                          </div>
                        </li>
                      </ul>
                    )}
                    <img
                      className="rounded h-10 w-10 object-cover"
                      src={user.photoURL}
                      alt="logo"
                    />
                    <p className="text-gray-800 text-sm ml-2">
                      {user.displayName}
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out"
                >
                  Login
                </Link>
              )}
            </div>
            <div className="flex items-center xl:hidden">
              <ul className="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                    <span className="ml-2 font-bold">Dashboard</span>
                  </div>
                </li>
                <li
                  className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                  // onClick="dropdownHandler(this)"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="ml-2 font-bold">Products</span>
                  </div>
                </li>
                <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-compass"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="ml-2 font-bold">Performance</span>
                </li>
                <li
                  className="border-b border-gray-300 flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                  // onClick={"dropdownHandler(this)"}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                    <span className="ml-2 font-bold">Deliverables</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <img
                        className="rounded h-10 w-10 object-cover"
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                        alt="logo"
                      />
                    </div>
                    <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                    <div className="sm:ml-2 text-gray-800 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={7} r={4} />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span className="ml-2">Profile</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div className="w-24">
              <img className=" w-10" src={Logo} alt="Logo" />
            </div>
            <div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40"
                : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img className=" w-10" src={Logo} alt="Logo" />
                          <p className="text-base text-gray-800 ml-3">
                            Old Friends
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <Link to={"/home"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Home
                            </p>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/blog"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Blog
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/dashboard"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Dashboard
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/allBuyers"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                All Buyers
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/allSellers"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                All Sellers
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/reportedItems"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Reported Items
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/addAProduct"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Add a Product
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/myBuyers"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                My Buyers
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to={"/myOrders"} className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                My Orders
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                            className="w-8 h-8 rounded-md"
                          />
                          <p className=" text-gray-800 text-base leading-4 ml-2">
                            Jane Doe
                          </p>
                        </div>
                        <ul className="">
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div className=" h-6  md:h-8">
                              <h3>Log Out</h3>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}
