import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);
  //   const [name, setName] = useState("mario");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id != id);
  //     setBlogs(newBlogs);
  //   };
  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://raw.githubusercontent.com/iamshaunjp/Complete-React-Tutorial/lesson-16/dojo-blog/data/db.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data.blogs);
          setPending(false);
        });
    }, 1000);
  }, []);
  return (
    <div className="home">
      {pending && <div>loading..</div>}
      {blogs && (
        <Bloglist blogs={blogs} title="All blogs" /> //handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
