import React from "react";

const Header = ({ data, onLogout }) => {
  return (
    <div className="flex items-end justify-between mx-2">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {data?.firstname || "User"} 👋
        </span>
      </h1>
      <button
        onClick={onLogout}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
