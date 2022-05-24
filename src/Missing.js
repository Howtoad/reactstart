import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="not-found">
      <h2>Whoops</h2>
      <p>Page missing</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZw3Tv_OP6JjEjf4821UgNY_Ll-NlrjHctTYItkTR51t6BJgSdTAD5tgrIt4HIOuDeRA&usqp=CAU"></img>
      <Link to="/home">Go home</Link>
    </div>
  );
};

export default Missing;
