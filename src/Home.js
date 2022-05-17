import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch(
    "https://raw.githubusercontent.com/iamshaunjp/Complete-React-Tutorial/lesson-19/dojo-blog/data/db.json"
  );
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
        <Bloglist blogs={blogs.blogs} title="All blogs" /> //handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
