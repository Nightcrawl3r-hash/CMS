import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({ name: "", description: "", avatar: "" });

  const submitBlog = async () => {
    try {
      const response = await axios.get(
        `https://6584268d4d1ee97c6bcf18e2.mockapi.io/blogs/blogs/${id}`
      );
      setBlog(response.data);
      //console.log(response.data)
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const sendEditedBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://6584268d4d1ee97c6bcf18e2.mockapi.io/blogs/blogs/${id}`,
        blog
      );
      //console.log(response);
      if (response.status === 200) {
        navigate(`/blog/${id}`);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating blog", error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    submitBlog();
  }, []);

  return (
    <div className="container m-auto px-2 lg:px-44 pt-12">
      <Title text={`Edit blog`} />
      <div className="md:w-3/5 lg:w-1/2 grid m-auto">
        <form onSubmit={sendEditedBlog} className="flex flex-col  gap-6 py-8">
          <input
            type="text"
            value={blog.name}
            name="title"
            id="title"
            className="p-2 rounded-md bg-gray-200"
            required
            placeholder="Title"

            onChange={(e) => setBlog({ ...blog, name: e.target.value })}
          />
          <textarea
            name="description"
            id="description"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            required
            className="p-2 bg-gray-200 rounded-md"
             rows="10"
            placeholder="Description"
          ></textarea>
          <input
            type="text"
            value={blog.avatar}
            id="image"
            required
            className="p-2 bg-gray-200 rounded-md"
            name="avatar"
            onChange={(e) => setBlog({ ...blog, avatar: e.target.value })}
            placeholder="Avatar URL"
          />
          <button type="submit" className="text-xl px-3 py-2 bg-green-500 w-max rounded-lg font-bold text-gray-800 hover:bg-green-600 transition-all ease-linear duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
