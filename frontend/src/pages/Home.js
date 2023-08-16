import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { moveTo } from "../redux/pageSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto grid grid-flow-col items-center">
      <div className="grid gap-20">
        <div className="grid gap-1 text-center md:text-start">
          <h1 className="text-3xl md:text-4xl font-medium text-[#e4892c]">
            Embark on unforgettable journeys,
          </h1>
          <h2 className="text-lg md:text-2xl font-medium">
            where adventure meets convenience.
          </h2>
          <h3 className="mt-5 md:w-3/4">
            We provide you Travel Destination references with rates from people
            around the world
          </h3>
        </div>
        <div className="flex justify-center md:justify-start">
          <Button
            title="Discover More"
            moreStyles="bg-[#e4892c] text-white w-max"
            onClick={() => {
              dispatch(moveTo("destination"));
              window.history.replaceState(null, null, "/destination");
            }}
          />
        </div>
      </div>
      <div className="flex justify-end hidden md:block">
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
