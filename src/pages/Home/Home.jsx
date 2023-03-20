import s from "./Home.module.css";

import Title from "../../images/Title.png";
import Filter from "../../components/Filter/Filter";
import CaractersList from "../../components/CaractersList/CaractersList";
import BattonsList from "../../components/BattonsList/BattonsList";
import { infoToast, myToast } from "../../helpers/toasts";

import { useState, useEffect } from "react";
import { fetchCaracters, fetchNames } from "../../data/characters";
import { sortItems } from "../../helpers/sortItems";

const Home = () => {
  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [page, setPage] = useState(() => {
    const saved = localStorage.getItem("page");
    const initialValue = JSON.parse(saved);
    return initialValue || 1;
  });

  const [next, setNext] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      } catch (error) {
        console.log(error);
        // alert(`${filter.toUpperCase()} isn't exist`);
        myToast(`${filter.toUpperCase()} isn't exist`);
        // setFilter("");
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

  const handleCangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFilter("");
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadLess = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={s.home}>
      <img className={s.title} src={Title} alt="Title" />
      <Filter
        filter={filter}
        onChange={handleCangeFilter}
        onSubmit={handleSubmitForm}
      />
      {isLoading && <p>Loading...</p>}
      <CaractersList items={items} />

      <BattonsList
        loadLess={loadLess}
        loadMore={loadMore}
        page={page}
        next={next}
      />
    </div>
  );
};

export default Home;
