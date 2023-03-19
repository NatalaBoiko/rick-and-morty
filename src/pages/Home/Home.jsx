// import { Link } from "react-router-dom";
import Title from "../../images/Title.png";
import Filter from "../../components/Filter/Filter";
// import CaractersList from "../../components/CaractersList/CaractersList";

import { fetchCaracters } from "../../data/characters";

// import "./Home.css";

const Home = () => {
  fetchCaracters();

  return (
    <>
      <img className="title" src={Title} alt="Title" />
      <Filter />
      {/* <CaractersList /> */}
    </>
  );
};

export default Home;
