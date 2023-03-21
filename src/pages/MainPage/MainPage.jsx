import s from "./MainPage.module.css";
import Title from "../../images/Title.png";

const MainPage = () => {
  return (
    <div className={s.mainContainer}>
      <img className={s.title} src={Title} alt="Title" />
    </div>
  );
};

export default MainPage;
