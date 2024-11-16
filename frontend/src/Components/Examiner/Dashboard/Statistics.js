import React, { useEffect, useState } from "react";
import Slider from "./StatsComponent/Slider";
import { useAppContext } from "../../../LocalStorage";
import { getQuizes } from "./../../../API/Quiz";

function Statistics() {
  const [quizes, setQuizes] = useState([]);
  const { user } = useAppContext();
  useEffect(() => {
    const getAllQuizes = async () => {
      let res = await getQuizes({
        email: user?.email,
        password: user?.password,
      });
      setQuizes(res.data);
    };
    getAllQuizes();
  }, []);
  return (
    <div>
      <div className="w-full  p-4 mt-4 ">
        {quizes.length !== 0 ? (
          <Slider slides={quizes}></Slider>
        ) : (
          <div className="w-full h-max items-center justify-center flex flex-col mt-60 bg-blue-50 p-10 rounded-xl text-blue-950">
            <h2 className="font-semibold text-4xl">No Data found</h2>
            <p className="mt-4">Create a new Quiz</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statistics;
