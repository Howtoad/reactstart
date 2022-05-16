import { useState } from "react";
const Home = () => {
  //let name = "mario";
  const [name, setName] = useState("mario");
  const handleClick = () => {
    setName("luigi");
  };

  const dontClick = (name, e) => {
    console.log(`${name} why did you click ${e.target}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          dontClick("Jacob", e);
        }}
      >
        dont click me
      </button>
    </div>
  );
};

export default Home;
