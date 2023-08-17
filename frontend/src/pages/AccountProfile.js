import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const AccountSetting = () => {
  const reviewData = useSelector((state) => state.review);

  const reviewArr = reviewData.map((item) => {
    if (localStorage.getItem("name") === item.user) {
      return (
        <div>
          <div className="flex justify-end">
            <label className="text-xs text-gray-400">
              {item.created_at.getDay() +
                "-" +
                item.created_at.getMonth() +
                "-" +
                item.created_at.getYear()}
            </label>
          </div>
          <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
            <div className="flex justify-start items-center gap-1">
              <label className="cursor-pointer">Destination:</label>
              <label className="text-gray-400 cursor-pointer">
                {item.destination}
              </label>
            </div>
            <div className="flex justify-end items-center gap-1">
              <label className="cursor-pointer">Rate: </label>
              <Icon
                className="text-[#e4892c]"
                icon={
                  item.rate >= 1 ? "solar:star-bold" : "solar:star-line-duotone"
                }
              />
              <Icon
                className="text-[#e4892c]"
                icon={
                  item.rate >= 2 ? "solar:star-bold" : "solar:star-line-duotone"
                }
              />
              <Icon
                className="text-[#e4892c]"
                icon={
                  item.rate >= 3 ? "solar:star-bold" : "solar:star-line-duotone"
                }
              />
              <Icon
                className="text-[#e4892c]"
                icon={
                  item.rate >= 4 ? "solar:star-bold" : "solar:star-line-duotone"
                }
              />
              <Icon
                className="text-[#e4892c]"
                icon={
                  item.rate >= 5 ? "solar:star-bold" : "solar:star-line-duotone"
                }
              />
            </div>
            <div className="flex justify-start items-center gap-1">
              <label className="cursor-pointer">Comment:</label>
              <label className="text-gray-400 cursor-pointer">
                {item.description}
              </label>
            </div>
          </button>
        </div>
      );
    }
  });

  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto my-10 grid gap-14">
      <div className="flex justify-center">
        <div className="border rounded-lg bg-white shadow-md p-5 w-2/5">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            Profile
          </h1>
          <div>
            <label>Name: </label>
            <input
              type="text"
              placeholder={localStorage.getItem("username")}
              disabled
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              placeholder={localStorage.getItem("email")}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border rounded-lg bg-white shadow-md p-5 w-full">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            User's Reviews
          </h1>
          <div className="grid gap-4">{reviewArr}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
