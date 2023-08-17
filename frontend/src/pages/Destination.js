import { Button } from "../components/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { addDestination } from "../redux/destinationSlice";

const Destination = () => {
  const [destination, setDestination] = useState();
  const [destinationSearch, setDestinationSearch] = useState("");
  const [showNewDestination, setShowNewDestination] = useState(false);
  const [destinationTitle, setDestinationTitle] = useState("");
  const [destinationDescription, setDestinationDescription] = useState("");
  const [destinationThumbnail, setDestinationThumbnail] = useState("");
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationLimit, setPaginationLimit] = useState(4);
  const destinationData = useSelector((state) => state.destination);
  const dispatch = useDispatch();

  const HandleAdd = () => {
    dispatch(
      addDestination({
        id: destinationData.length + 1,
        title: destinationTitle,
        description: destinationDescription,
        thumbnail: destinationThumbnail,
        review: [],
      })
    );
  };

  const destinationArr = (
    destinationSearch === ""
      ? destinationData
      : destinationData.filter((user) =>
          user.title.toLowerCase().includes(destinationSearch.toLowerCase())
        )
  )
    .slice(paginationLimit - 4, paginationLimit)
    .map((item) => {
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
        {!showNewDestination ? (
          <div className="flex items-center gap-2">
            <Icon className="text-2xl" icon="ic:round-search" />
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
              type="text"
              placeholder="seach"
              onChange={(e) => setDestinationSearch(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {localStorage.getItem("role") === "admin" ? (
          <div>
            <Button
              moreStyles="bg-[#e4892c] text-white w-max"
              title={!showNewDestination ? "Add Destination" : "Close"}
              onClick={() =>
                setShowNewDestination(showNewDestination ? false : true)
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {showNewDestination ? (
        <div className="mb-10 flex justify-center gap-4">
          <div className="flex gap-2 items-center">
            <label>Title</label>
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
              type="text"
              value={destinationTitle}
              onChange={(e) => setDestinationTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Description</label>
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
              type="text"
              value={destinationDescription}
              onChange={(e) => setDestinationDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Thumbnail</label>
            <input
              className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2"
              type="text"
              value={destinationThumbnail}
              onChange={(e) => setDestinationThumbnail(e.target.value)}
            />
          </div>
          <Button
            moreStyles="bg-[#e4892c] text-white w-max"
            title="Submit"
            onClick={() => {
              HandleAdd();
              setShowNewDestination(false);
              setDestinationTitle("");
              setDestinationDescription("");
              setDestinationThumbnail("");
            }}
          />
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {destinationArr}
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          moreStyles="bg-[#e4892c] text-white w-max"
          title="Previous"
          onClick={() => {
            setPaginationPage(paginationPage - 1);
            setPaginationLimit(paginationLimit - 4);
          }}
        />
        <label>{paginationPage}</label>
        <Button
          moreStyles="bg-[#e4892c] text-white w-max"
          title="Next >>>"
          onClick={() => {
            setPaginationPage(paginationPage + 1);
            setPaginationLimit(paginationLimit + 4);
          }}
        />
      </div>
    </div>
  );
};

export default Destination;
