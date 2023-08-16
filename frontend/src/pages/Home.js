import { useDispatch } from "react-redux";
import { moveTo } from "../redux/pageSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container xl:px-20 mx-auto grid grid-flow-col items-center">
      <div className="grid gap-20">
        <div className="grid gap-1">
          <h1 className="text-2xl font-medium text-[#e4892c]">
            Embark on unforgettable journeys,
          </h1>
          <h2 className="text-lg font-medium">
            where adventure meets convenience.
          </h2>
          <h3 className="mt-5 w-3/4">
            We provide you Travel Destination references with rates from people
            around the world
          </h3>
        </div>
        <button
          className="w-max drop-shadow-md bg-[#e4892c] hover:bg-[#bf7324] text-white font-medium px-3 py-1 rounded"
          onClick={() => {
            dispatch(moveTo("destination"));
            window.history.replaceState(null, null, "/destination");
          }}
        >
          Discover More
        </button>
      </div>
      <div className="flex justify-end">
        <img
          className="w-4/5"
          src={require("../assets/Around The World.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
