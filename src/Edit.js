import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const Edit = () => {
  const { id } = useParams();
  const { data: blog } = useFetch(`http://localhost:8000/blogs/${id}`);
  console.log(blog);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setPending(true);
    fetch("http://localhost:8000/blogs/" + { id }, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setPending(false);
      navigate("/home");
    });
  };
  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Title:
          <input
            type="text"
            required
            value={blog.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Blog body:
          <textarea
            required
            value={blog.body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>

        <label>Blog author:</label>
        <select value={blog.author} onChange={(e) => setAuthor(e.value.target)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        {!pending && <button type="submit">Edit the blog</button>}
        {pending && <button disabled>Editing blog..</button>}
      </form>
    </div>
  );
};

export default Edit;
