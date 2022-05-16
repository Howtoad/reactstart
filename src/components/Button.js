const Button = () => {
  const handleClick = (laugh) => {
    console.log(`totally new button ${laugh} ${Date()}`);
  };
  return (
    <button
      onClick={() => {
        handleClick("hehe");
      }}
    >
      Click me 3
    </button>
  );
};

export default Button;
