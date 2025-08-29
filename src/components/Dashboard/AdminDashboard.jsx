import React, { useContext } from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";


const AdminDashboard = ({ data, onLogout }) => {

  return (
    <div className="h-screen w-full p-10">
      <Header data={data} onLogout={onLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
