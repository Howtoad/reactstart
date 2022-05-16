/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Navbar = () => {
  const styles = {
    navbar: css`
      padding: 20px;
      display: flex;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
    `,
    heading: css`
      color: #f1356d;
    `,
    links: css`
      margin-left: auto;
    `,
    links_a: css`
      margin-left: 16px;
      text-decoration: none;
      padding: 6px;
      &:hover {
        color: #f1356d;
      }
    `,
  };
  return (
    <nav css={styles.navbar}>
      <h1 css={styles.heading}>Super blog</h1>
      <div css={styles.links}>
        <a href="/" css={styles.links_a}>
          Home
        </a>
        <a
          href="/"
          css={styles.links_a}
          style={{
            color: "white",
            backgroundColor: "pink",
            borderRadius: "10px",
          }}
        >
          Nothome
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
