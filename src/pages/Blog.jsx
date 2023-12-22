import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  //console.log(id);
  const [singleBlog, setSingleBlog] = useState(null);
  const getBlog = async () => {
    try {
      const response = await axios.get(
        "https://6584268d4d1ee97c6bcf18e2.mockapi.io/blogs/blogs/" + id
      );
      //console.log(response);
      setSingleBlog(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="container m-auto px-44 pt-12">
      <Title text={`Blog`} />
      <section className="flex justify-center items-center pt-12">
        {singleBlog && (
          <div className="grid grid-cols-3 gap-4 p-6 bg-gray-200 rounded-xl w-4/5" key={singleBlog.id}>
            <img src={singleBlog.avatar} alt="image" className="rounded-tl-2xl rounded-br-2xl w-full drop-shadow-xl" />
            <div className="flex flex-col gap-1 text-center col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800">{singleBlog.name}</h2>
              <h3 className="">{singleBlog.description}</h3>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
