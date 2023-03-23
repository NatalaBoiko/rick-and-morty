import s from "./Home.module.css";

import Title from "../../images/Title.png";
import Filter from "../../components/Filter/Filter";
import CaractersList from "../../components/CaractersList/CaractersList";
import BattonsList from "../../components/BattonsList/BattonsList";
import { myToast } from "../../helpers/toasts";

import { useState, useEffect } from "react";
import { fetchCaracters, fetchNames } from "../../data/characters";
import { sortItems } from "../../helpers/sortItems";

const Home = () => {
  const [filter, setFilter] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("filter"));
    return initialValue || "";
  });

  const [items, setItems] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("items"));
    return initialValue || [];
  });

  const [page, setPage] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("page"));
    return initialValue || 1;
  });

  const [next, setNext] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const getCharacters = async (page) => {
      setIsLoading(true);
      try {
        const data = await fetchCaracters(page);
        console.log(data);
        const sortedItems = sortItems(data.results);
        setItems([...sortedItems]);
        setNext(data.info.next);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getNames = async (page, filter) => {
      setIsLoading(true);
      try {
        const data = await fetchNames(page, filter);
        console.log(data);

        const sortedItems = sortItems(data.results);
        setItems([...sortedItems]);
        setNext(data.info.next);
        setIsValid(true);
      } catch (error) {
        console.log(error);
        myToast(`${filter.toUpperCase()} isn't exist`);
        setIsValid(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (filter) {
      getNames(page, filter);
    } else getCharacters(page);

    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("page", JSON.stringify(page));
  }, [filter, page]);

  return (
    <div className={s.home}>
      <img className={s.title} src={Title} alt="Title" />
      <Filter
        filter={filter}
        setFilter={setFilter}
        setPage={setPage}
        isValid={isValid}
      />
      {isLoading && <p>Loading...</p>}
      <CaractersList items={items} />
      <BattonsList setPage={setPage} page={page} next={next} />
    </div>
  );
};

export default Home;
