import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useContext(BlogContext);

  return (
    <div className="container m-auto px-2 lg:px-44 pt-12">
      <Title text={`Blogs`} />

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 py-4">
        {data.map((dat) => (
          <section
            className="border border-[#ff0336] flex flex-col rounded-xl overflow-hidden bg-gray-100"
            key={dat.id}
          >
            <img src={dat.avatar} alt="image" />
            <div className=" text-center flex flex-col gap-1 p-2">
              <h2 className="font-semibold text-xl text-gray-800">
                {dat.name}
              </h2>
              <h3 className="text-gray-700 truncate">{dat.description}</h3>
              <section className="flex justify-center">
                <Link
                  to={`blog/${dat.id}`}
                  className="px-3 py-2 bg-gray-600 w-max text-center text-gray-100 rounded-xl hover:bg-gray-800"
                >
                  See More
                </Link>
              </section>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
