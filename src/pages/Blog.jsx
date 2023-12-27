import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const navigate = useNavigate();
  //Get single blog
  const { id } = useParams();
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

  const DeleteBlog = async () => {
    try {
      const response = await axios.delete(
        "https://6584268d4d1ee97c6bcf18e2.mockapi.io/blogs/blogs/" + id
      );
      if (response.status == 200) {
        navigate("/");
      }
      //console.log(response);
    } catch (error) {
      console.error("Error carryinh out the action", error);
    }
  };

  return (
    <div className="container m-auto lg:px-44 py-12">
      <Title text={`Blog`} />
      <section className="flex  justify-center items-center pt-12">
        {singleBlog && (
          <div
            className="grid lg:grid-cols-3 gap-4 p-6 bg-gray-200 rounded-xl w-4/5"
            key={singleBlog.id}
          >
            <img
              src={singleBlog.avatar}
              alt="image"
              className="rounded-tl-2xl rounded-br-2xl w-full drop-shadow-xl"
            />
            <div className="flex flex-col gap-1 text-center lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {singleBlog.name}
              </h2>
              <h3 className="">{singleBlog.description}</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => DeleteBlog()}
                  className="px-3 py-2 bg-red-500 w-max rounded-xl hover:bg-red-600 font-bold text-gray-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/editBlog/${singleBlog.id}`)}
                  className="px-3 py-2 bg-orange-500 w-max rounded-xl hover:bg-orange-600 font-bold text-gray-200"
                >
                  Edit Blog
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
