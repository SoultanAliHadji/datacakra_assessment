import { Button } from "../components/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { editRole } from "../redux/userSlice";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState();
  const [newUserRole, setNewUserRole] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const HandleEdit = () => {
    dispatch(
      editRole({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: newUserRole,
        token: user.token,
        index: userIndex,
      })
    );
  };

  const userArr = (
    userSearch === ""
      ? userData
      : userData.filter((user) =>
          user.name.toLowerCase().includes(userSearch.toLowerCase())
        )
  ).map((item, index) => {
    return (
      <div className="border rounded-lg shadow-md h-max" key={item.id}>
        {user?.id !== item.id ? (
          <button
            className="rounded-lg grid gap-3 p-3 hover:text-white hover:bg-[#e4892c] w-full"
            onClick={() => {
              setUser(item);
              setUserIndex(index);
            }}
          >
            <div className="flex justify-center">
              <h2 className="text-lg font-medium">{item.role}</h2>
            </div>
            <hr />
            <div className="grid justify-start">
              <div className="flex gap-2">
                <h3>Name:</h3>
                <h3>{item.name}</h3>
              </div>
              <div className="flex gap-2">
                <h3>Email:</h3>
                <h3>{item.email}</h3>
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
            <div className="grid md:grid-flow-col items-center">
              <h2 className="text-lg font-medium">Edit {item.name}'s Role</h2>
              <div className="flex justify-end">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setUser();
                    setNewUserRole();
                    setUserIndex();
                  }}
                >
                  <Icon
                    className="text-3xl hover:text-[#e4892c]"
                    icon="iconoir:cancel"
                  />
                </span>
              </div>
            </div>
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2 w-full"
              placeholder="new role"
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                title="Submit"
                moreStyles="bg-[#e4892c] text-white w-max"
                onClick={() => {
                  HandleEdit();
                  setUser();
                  setNewUserRole();
                  setUserIndex();
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
      <div className="flex justify-end items-center gap-2 mb-10">
        <Icon className="text-2xl" icon="ic:round-search" />
        <input
          className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
          type="text"
          placeholder="seach"
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{userArr}</div>
    </div>
  );
};

export default Dashboard;
