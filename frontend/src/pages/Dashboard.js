import { Button } from "../components/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "User Name 1", email: "User Email 1", role: "User Role 1" },
    { id: 2, name: "User Name 2", email: "User Email 2", role: "User Role 2" },
    { id: 3, name: "User Name 3", email: "User Email 3", role: "User Role 3" },
    { id: 4, name: "User Name 4", email: "User Email 4", role: "User Role 4" },
    { id: 5, name: "User Name 5", email: "User Email 5", role: "User Role 5" },
  ]);
  const [userId, setUserId] = useState();

  const userArr = userData.map((user) => {
    return (
      <div className="border rounded-lg shadow-md h-max" key={user.id}>
        {userId !== user.id ? (
          <button
            className="rounded-lg grid gap-3 p-3 hover:text-white hover:bg-[#e4892c] w-full"
            onClick={() => setUserId(user.id)}
          >
            <div className="flex justify-center">
              <h2 className="text-lg font-medium">{user.role}</h2>
            </div>
            <hr />
            <div className="grid justify-start">
              <div className="flex gap-2">
                <h3>Name:</h3>
                <h3>{user.name}</h3>
              </div>
              <div className="flex gap-2">
                <h3>Email:</h3>
                <h3>{user.email}</h3>
              </div>
            </div>
            <div className="flex justify-end">
              <Icon
                className="text-2xl"
                icon="solar:double-alt-arrow-right-line-duotone"
              />
            </div>
          </button>
        ) : (
          <div className="grid gap-3 p-3">
            <div className="flex justify-center">
              <h2 className="text-lg font-medium">Edit {user.name} Role</h2>
            </div>
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2 w-full"
              placeholder="new role"
            />
            <div className="flex justify-end">
              <Button
                title="Submit"
                moreStyles="bg-[#e4892c] text-white w-max"
                onClick={() => {
                  setUserId();
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto my-7">
      <h1 className="text-center text-xl font-semibold mb-14 underline">
        Superadmin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{userArr}</div>
    </div>
  );
};

export default Dashboard;
