import React, { useContext } from "react";
import Title from "../components/Title";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const { setTitle, setDescription, setImage, CreateBlog } =
    useContext(BlogContext);
  return (
    <div className="container m-auto px-44 py-8">
      <div className="">
        <Title text={`Create Blog`} />
        <form onSubmit={CreateBlog} className="flex flex-col gap-6 py-4 px-60">
          <input
            type="text"
            placeholder="Enter title"
            required
            className="p-2 rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            required
            type="text"
            className="rounded-sm p-2"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="p-2 rounded-sm"
            placeholder="Enter image url"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="px-4 py-2 bg-[#ff0336] w-max text-gray-950 font-semibold rounded-xl hover:bg-red-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
