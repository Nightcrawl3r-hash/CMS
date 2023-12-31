import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogContext = createContext();
const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const URL = "https://6584268d4d1ee97c6bcf18e2.mockapi.io/blogs/blogs";

  //Create Blog
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const CreateBlog = async (e) => {
    if (!title || !description || !image) {
      return;
    }
    e.preventDefault();
    const response = await axios.post(URL, {
      name: title,
      description,
      avatar: image,
    });
    if (response.status == 201) {
      navigate("/");
    }
    // Clear input fields
    setTitle("");
    setDescription("");
    setImage("");
    console.log(response);
  };
  //********* */

  //****************/
  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
      //console.log(response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BlogContext.Provider
      value={{
        data,
        title,
        description,
        image,
        CreateBlog,
        setTitle,
        setDescription,
        setImage,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
export { BlogContext, BlogProvider };
