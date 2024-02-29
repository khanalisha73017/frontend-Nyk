import React, { useState } from "react";
import { DashBoardTable } from "./DashBoardTable";
import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";

//w-full bg-primary-100 h-lvh
export const Dashboard = () => {
  let [order, setOrder] = useState("asc");
  let [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageData] = useState(5);

  const { isAuth, loggedInUser } = useSelector((store) => store.authuser);
  console.log(loggedInUser, "userLogin");
  console.log(isAuth, "userAuth");
  const avatar = loggedInUser.avatar;
  console.log(avatar, "avatar");

  return (
    <div className="dash-container bg-primary-100 p-4">
      <div className="flex gap-8 items-center justify-between mb-8">
        <div className="relative grow maxW-40">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="user">
          <div className="bell-box">
            <img src="notification-bing.svg" alt="logo" className="bell" />
          </div>
          <img src={avatar} alt="userlogo" className="singleUser" />
        </div>
      </div>

      <Toolbar
        setOrder={setOrder}
        setGenderFilter={setGenderFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <DashBoardTable
        order={order}
        search={search}
        genderFilter={genderFilter}
        categoryFilter={categoryFilter}
        perPageData={perPageData}
        currentPage={currentPage}
      />
    </div>
  );
};
