import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addDestination } from "../redux/destinationSlice";

const Destination = () => {
  const [destination, setDestination] = useState();
  const [destinationSearch, setDestinationSearch] = useState("");
  const [newDestination, setNewDestination] = useState(false);
  const destinationData = useSelector((state) => state.destination);
  const dispatch = useDispatch();

  const HandleAdd = () => {
    dispatch(addDestination({}))
  }

  const destinationArr = (
    destinationSearch === ""
      ? destinationData
      : destinationData.filter((user) =>
          user.title.toLowerCase().includes(destinationSearch.toLowerCase())
        )
  ).map((item) => {
    return (
      <button
        className="border rounded-lg bg-white shadow-md p-5 grid gap-2 h-max"
        key={item.id}
      >
        <img className="w-full aspect-square" src={item.thumbnail} alt="" />
        <h6 className="text-center font-medium">{item.title}</h6>
        <div className="text-justify">
          <label>{item.description}</label>
        </div>
      </button>
    );
  });

  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto my-7">
      <h1 className="text-center text-xl font-semibold mb-14 underline">
        All Destination
      </h1>
      <div className="mb-10 flex justify-end items-center gap-4">
        <div className="flex items-center gap-2">
          <Icon className="text-2xl" icon="ic:round-search" />
          <input
            className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
            type="text"
            placeholder="seach"
            onChange={(e) => setDestinationSearch(e.target.value)}
          />
        </div>
        <div>
          <Button
            moreStyles="bg-[#e4892c] text-white w-max"
            title="Add Destination"
            onClick={() => setNewDestination(true)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {destinationArr}
      </div>
    </div>
  );
};

export default Destination;
