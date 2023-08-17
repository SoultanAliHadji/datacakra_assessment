import { Button } from "../components/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { addDestination } from "../redux/destinationSlice";
import { addReview } from "../redux/reviewSlice";

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState();
  const [destinationSearch, setDestinationSearch] = useState("");
  const [showNewDestination, setShowNewDestination] = useState(false);
  const [destinationTitle, setDestinationTitle] = useState("");
  const [destinationDescription, setDestinationDescription] = useState("");
  const [destinationThumbnail, setDestinationThumbnail] = useState("");
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationLimit, setPaginationLimit] = useState(4);
  const destinationData = useSelector((state) => state.destination);
  const reviewData = useSelector((state) => state.review);
  const [reviewStar, setReviewStar] = useState(0);
  const [reviewDescription, setReviewDescription] = useState("");
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

  const HandleReview = () => {
    dispatch(
      addReview({
        id: reviewData.length + 1,
        user: localStorage.getItem("name"),
        destination: currentDestination.title,
        rate: reviewStar,
        description: reviewDescription,
        created_at: new Date(),
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
          onClick={() => {
            setCurrentDestination(item);
          }}
        >
          <img className="w-full aspect-square" src={item.thumbnail} alt="" />
          <h6 className="text-center font-medium">{item.title}</h6>
          <div className="text-justify">
            <label>{item.description}</label>
          </div>
        </button>
      );
    });

  const reviewArr = reviewData.map((item) => {
    if (currentDestination?.title === item.destination) {
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
          <div className="grid border rounded-lg p-2 w-full">
            <div className="grid grid-cols-2">
              <div className="flex justify-start items-center gap-1">
                <label>User:</label>
                <label className="text-gray-400">{item.user}</label>
              </div>
              <div className="flex justify-end items-center gap-1">
                <label>Rate: </label>
                <Icon
                  className="text-[#e4892c]"
                  icon={
                    item.rate >= 1
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                />
                <Icon
                  className="text-[#e4892c]"
                  icon={
                    item.rate >= 2
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                />
                <Icon
                  className="text-[#e4892c]"
                  icon={
                    item.rate >= 3
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                />
                <Icon
                  className="text-[#e4892c]"
                  icon={
                    item.rate >= 4
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                />
                <Icon
                  className="text-[#e4892c]"
                  icon={
                    item.rate >= 5
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                />
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <label>Destination:</label>
              <label className="text-gray-400">{item.destination}</label>
            </div>
            <div className="flex justify-start items-center gap-1">
              <label>Comment:</label>
              <label className="text-gray-400">{item.description}</label>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto my-7">
      {currentDestination !== undefined ? (
        <button
          className="flex justify-start bg-[#e4892c] text-white w-max rounded px-4 py-1"
          onClick={() => {
            setCurrentDestination();
          }}
        >
          <Icon
            className="text-2xl"
            icon="solar:double-alt-arrow-left-line-duotone"
          />
        </button>
      ) : (
        ""
      )}
      <h1 className="text-center text-xl font-semibold mb-14 underline">
        {currentDestination === undefined
          ? "All Destination"
          : currentDestination?.title}
      </h1>
      {currentDestination === undefined ? (
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
      ) : (
        <div className="grid gap-6">
          <div className="flex justify-center">
            <img
              className="w-3/5 md:w-1/3 aspect-square"
              src={currentDestination?.thumbnail}
              alt=""
            />
          </div>
          <p>{currentDestination?.description}</p>
          <div className="mt-20">
            <h1 className="text-lg font-semibold mb-8 underline">Reviews</h1>
            <div className="grid gap-4">{reviewArr}</div>
          </div>
          {localStorage.getItem("role") === "admin" ||
          localStorage.getItem("role") === "user" ? (
            <div className="grid gap-2">
              <h3>Add Review</h3>
              <div className="flex justify-center gap-1">
                <Icon
                  className="text-[#e4892c] cursor-pointer"
                  icon={
                    reviewStar >= 1
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                  onClick={() => {
                    setReviewStar(1);
                  }}
                />
                <Icon
                  className="text-[#e4892c] cursor-pointer"
                  icon={
                    reviewStar >= 2
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                  onClick={() => {
                    setReviewStar(2);
                  }}
                />
                <Icon
                  className="text-[#e4892c] cursor-pointer"
                  icon={
                    reviewStar >= 3
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                  onClick={() => {
                    setReviewStar(3);
                  }}
                />
                <Icon
                  className="text-[#e4892c] cursor-pointer"
                  icon={
                    reviewStar >= 4
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                  onClick={() => {
                    setReviewStar(4);
                  }}
                />
                <Icon
                  className="text-[#e4892c] cursor-pointer"
                  icon={
                    reviewStar >= 5
                      ? "solar:star-bold"
                      : "solar:star-line-duotone"
                  }
                  onClick={() => {
                    setReviewStar(5);
                  }}
                />
              </div>
              <div className="flex gap-4">
                <textarea
                  className="border-2 rounded border-gray-200 enabled:hover:border-gray-300 px-2 w-full"
                  name=""
                  id=""
                  rows="4"
                  value={reviewDescription}
                  onChange={(e) => {
                    setReviewDescription(e.target.value);
                  }}
                ></textarea>
                {reviewStar !== 0 && reviewDescription !== "" ? (
                  <div className="flex justify-end">
                    <Button
                      moreStyles="bg-[#e4892c] text-white w-max"
                      title="Submit"
                      onClick={() => {
                        HandleReview();
                        setReviewStar(0);
                        setReviewDescription("");
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
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
      {currentDestination === undefined ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {destinationArr}
        </div>
      ) : (
        ""
      )}
      {currentDestination === undefined ? (
        <div className="flex justify-center items-center gap-4">
          <Button
            moreStyles={
              "bg-[#e4892c] text-white w-max" +
              (paginationPage === 1 ? " invisible" : "")
            }
            title="Previous"
            onClick={() => {
              setPaginationPage(paginationPage - 1);
              setPaginationLimit(paginationLimit - 4);
            }}
          />
          <label>{paginationPage}</label>
          <Button
            moreStyles={
              "bg-[#e4892c] text-white w-max" +
              (destinationData.length <= paginationLimit ? " invisible" : "")
            }
            title="Next >>>"
            onClick={() => {
              setPaginationPage(paginationPage + 1);
              setPaginationLimit(paginationLimit + 4);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Destination;
