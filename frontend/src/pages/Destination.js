import { useEffect, useState } from "react";
import axios from "axios";

const Destination = () => {
  const [destinationData, setDestinationData] = useState([]);

  useEffect(() => {
    axios
      .get("https://exampletravelapi.datacakra.com/api/destination", {
        headers: {
          Authorization:
            "Bearer " + "10|Qj3reAxIjI2CGNnmvoX5xovhHJTS495u9CfKGjiu",
        },
      })
      .then((res) => {
        setDestinationData(res.data.data.data);
        console.log(res.data.data.data);
      })
      .catch((err) => {});
  }, []);

  const destinationArr = destinationData.map((item) => {
    return (
      <div>
        <img className="w-full aspect-square" src={item.thumbnail} alt="" />
        <h6 className="text-center font-medium">{item.title}</h6>
        <div className="text-justify">
          <label>{item.description}</label>
        </div>
      </div>
    );
  });

  return (
    <div className="container xl:px-20 mx-auto my-7">
      <h1 className="text-center text-xl font-semibold mb-14 underline">
        All Destination
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {destinationArr}
      </div>
    </div>
  );
};

export default Destination;
