import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
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
          <input type="text" required />
        </label>

        <label>
          Blog body:
          <textarea required></textarea>
        </label>

        <label>Blog author:</label>
        <select>
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
