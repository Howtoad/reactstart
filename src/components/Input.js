import { css } from "@emotion/react";
import { useState } from "react";
const Input = () => {
  const [value, setValue] = useState("");
  const styles = {
    Input: css`
      color: "white";
      background-color: "black";
      font-weight: bold;
      &:focus {
        ::placeholder {
          color: "transparent";
        }
      }
    `,
  };
  return (
    <>
      <p>{value}</p>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        css={styles.Input}
        placeholder="skriv her"
        id="input"
      ></input>
      ;<button>TExt clicker</button>
    </>
  );
};

export default Input;
