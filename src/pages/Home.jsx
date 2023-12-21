import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Title from "../components/Title";

const Home = () => {
  const { data } = useContext(BlogContext);
  return (
    <div className="conatiner m-auto px-44 pt-12">
      <Title text={`Blogs`} />

      <div className="grid grid-cols-5 gap-8 py-4">
        {data.map((dat) => (
          <section
            className="border border-[#ff0336] flex flex-col rounded-xl overflow-hidden bg-gray-100"
            key={dat.id}
          >
            <img src={dat.avatar} alt="image" />
            <div className=" text-center flex flex-col gap-1 py-4">
              <h2 className="font-semibold text-xl text-gray-800">
                {dat.name}
              </h2>
              <h3 className="text-gray-700">{dat.description}</h3>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
