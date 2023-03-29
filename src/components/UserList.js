import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getAllUser();
    } catch (error) {
      console.log(error);
    }
  };

  //dummy function manual tailwind atau pake (border separate/spacing)
  const thtd = "";

  return (
    <>
      <div className="ml-10 mt-10">
        <div className="">
          <Link
            to="add"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add New
          </Link>
          <table class="border border-separate border-spacing-3 bg-slate-300 my-5 rounded-md">
            <thead className="">
              <tr className="">
                <th className={thtd}>No</th>
                <th className={thtd}>Name</th>
                <th className={thtd}>Email</th>
                <th className={thtd}>Address</th>
                <th className={thtd}>Actions</th>
              </tr>
            </thead>
            <tbody className="mx-10">
              {users.map((user, index) => (
                <tr key={user._id} className="mx-10">
                  <td className={thtd}>{index + 1}</td>
                  <td className={thtd}>{user.name}</td>
                  <td className={thtd}>{user.email}</td>
                  <td className={thtd}>{user.address}</td>
                  <td className={thtd}>
                    <Link
                      to={`edit/${user._id}`}
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
