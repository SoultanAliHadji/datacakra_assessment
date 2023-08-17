import { Icon } from "@iconify/react";

const AccountSetting = () => {
  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto my-10 grid gap-14">
      <div className="flex justify-center">
        <div className="border rounded-lg bg-white shadow-md p-5 w-2/5">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            Profile
          </h1>
          <div>
            <label>Name: </label>
            <input type="text" placeholder={"Nama User"} disabled />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder={"Email User"} disabled />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border rounded-lg bg-white shadow-md p-5 w-3/5">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            User's Reviews
          </h1>
          <div className="grid gap-4">
            <div>
              <div className="flex justify-end">
                <label className="text-xs text-gray-400">
                  Date: 17 Aug 2023
                </label>
              </div>
              <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Destination:</label>
                  <label className="text-gray-400 cursor-pointer">Destination Name</label>
                </div>
                <div className="flex justify-end items-center gap-1">
                  <label className="cursor-pointer">Rate: </label>
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                </div>
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Comment:</label>
                  <label className="text-gray-400 cursor-pointer">User's Comment</label>
                </div>
              </button>
            </div>
            <div>
              <div className="flex justify-end">
                <label className="text-xs text-gray-400">
                  Date: 17 Aug 2023
                </label>
              </div>
              <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Destination:</label>
                  <label className="text-gray-400 cursor-pointer">Destination Name</label>
                </div>
                <div className="flex justify-end items-center gap-1">
                  <label className="cursor-pointer">Rate: </label>
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                </div>
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Comment:</label>
                  <label className="text-gray-400 cursor-pointer">User's Comment</label>
                </div>
              </button>
            </div>
            <div>
              <div className="flex justify-end">
                <label className="text-xs text-gray-400">
                  Date: 17 Aug 2023
                </label>
              </div>
              <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Destination:</label>
                  <label className="text-gray-400 cursor-pointer">Destination Name</label>
                </div>
                <div className="flex justify-end items-center gap-1">
                  <label className="cursor-pointer">Rate: </label>
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                </div>
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Comment:</label>
                  <label className="text-gray-400 cursor-pointer">User's Comment</label>
                </div>
              </button>
            </div>
            <div>
              <div className="flex justify-end">
                <label className="text-xs text-gray-400">
                  Date: 17 Aug 2023
                </label>
              </div>
              <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Destination:</label>
                  <label className="text-gray-400 cursor-pointer">Destination Name</label>
                </div>
                <div className="flex justify-end items-center gap-1">
                  <label className="cursor-pointer">Rate: </label>
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                </div>
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Comment:</label>
                  <label className="text-gray-400 cursor-pointer">User's Comment</label>
                </div>
              </button>
            </div>
            <div>
              <div className="flex justify-end">
                <label className="text-xs text-gray-400">
                  Date: 17 Aug 2023
                </label>
              </div>
              <button className="grid grid-cols-2 border rounded-lg p-2 w-full">
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Destination:</label>
                  <label className="text-gray-400 cursor-pointer">Destination Name</label>
                </div>
                <div className="flex justify-end items-center gap-1">
                  <label className="cursor-pointer">Rate: </label>
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon className="text-[#e4892c]" icon="solar:star-bold" />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-bold"
                  />
                  <Icon
                    className="text-[#e4892c]"
                    icon="solar:star-line-duotone"
                  />
                </div>
                <div className="flex justify-start items-center gap-1">
                  <label className="cursor-pointer">Comment:</label>
                  <label className="text-gray-400 cursor-pointer">User's Comment</label>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
