import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-48">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 flex justify-center align-middle">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 flex justify-center align-middle">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 flex justify-center align-middle">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 flex justify-center align-middle">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5 flex justify-center align-middle">Failed Task</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.EMPLOYEES.map(function (elem, idx) {
          return (
            <div key={idx} className="border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 flex justify-center align-middle">{elem.firstname}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600 flex justify-center align-middle">{elem.taskNumbers.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400 flex justify-center align-middle">{elem.taskNumbers.active}</h5>
              <h5 className="text-lg font-medium w-1/5 flex justify-center align-middle">{elem.taskNumbers.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600 flex justify-center align-middle">{elem.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
