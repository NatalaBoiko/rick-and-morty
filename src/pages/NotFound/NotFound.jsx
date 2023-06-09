import s from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={s.notFoundPage}>
      <Link className={s.link} to="/">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
            fill="black"
          />
        </svg>
        GO BACK
      </Link>

      <h1 className={s.notFound}>
        Something went wrong ... <span>&#128526;</span>
      </h1>
    </div>
  );
};

export default NotFound;
