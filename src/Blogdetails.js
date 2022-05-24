import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    pending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();
  const handleClick = () => {
    if (window.confirm("You sure?")) {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        navigate("/home");
      });
    }
  };
  const handleEdit = () => {
    fetch("http://localhost:8000/blogs" + blog.id, {
      method: "PATCH",
    }).then(() => {
      navigate("/edit/" + blog.id);
    });
  };

  return (
    <div className="blog-details">
      {pending && <div>Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
