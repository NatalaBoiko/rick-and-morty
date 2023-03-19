// import { Link } from "react-router-dom";
import s from "./Home.module.css";

import Title from "../../images/Title.png";
import Filter from "../../components/Filter/Filter";
import CaractersList from "../../components/CaractersList/CaractersList";
import Button from "../../components/Button/Button";

import { useState, useEffect } from "react";

import { fetchCaracters, fetchNames } from "../../data/characters";
import { sortItems } from "../../helpers/sortItems";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCharacters = async (page) => {
      try {
        setIsLoading(true);
        const data = await fetchCaracters(page);
        const sortedItems = sortItems(data.results);
        // console.log(sortedItems);
        setItems([...sortedItems]);
        // setCount(data.info.count);
        setNext(data.info.next);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getNames = async (page, filter) => {
      try {
        setIsLoading(true);
        const data = await fetchNames(page, filter);
        const sortedItems = sortItems(data.results);
        setItems([...sortedItems]);
        // setCount(data.info.count);
        setNext(data.info.next);
      } catch (error) {
        console.log(error);
        alert(` ${filter.toUpperCase()} isn't exist`);
        setFilter("");
      } finally {
        setIsLoading(false);
      }
    };
    if (filter) {
      getNames(page, filter);
    } else getCharacters(page);
  }, [filter]);

  const handleCangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFilter("");
  };

  return (
    <>
      <img className={s.title} src={Title} alt="Title" />
      <Filter
        filter={filter}
        onChange={handleCangeFilter}
        onSubmit={handleSubmitForm}
      />
      {isLoading && <p>Loading...</p>}
      <CaractersList items={items} />
      {page > 1 && (
        <Button
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
          title={page - 1}
          type="button"
          className="load-more"
        />
      )}

      {next && (
        <Button
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
          // title="Load more"
          title={page + 1}
          type="button"
          className="load-more"
        />
      )}
    </>
  );
};

export default Home;
