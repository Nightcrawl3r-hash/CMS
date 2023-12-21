import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditBlog from "./pages/EditBlog";
import CreateBlog from "./pages/CreateBlog";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { BlogProvider } from "./context/BlogContext";
AOS.init();
const App = () => {
  return (
    <>
      <BlogProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/editBlog" element={<EditBlog />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </>
  );
};

export default App;
