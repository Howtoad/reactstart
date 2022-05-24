import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //   const [name, setName] = useState("mario");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id != id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {pending && <div>loading..</div>}
      {blogs && (
        <Bloglist blogs={blogs} title="All blogs" /> //handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
