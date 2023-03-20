import s from "./Character.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchById } from "../../data/characters";

const Character = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [origin, setOrigin] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getById = async (id) => {
      setIsLoading(true);

      try {
        const data = await fetchById(id);
        console.log(data);
        setItem(data);
        setOrigin(data.origin.name);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getById(id);
  }, [id]);

  const { name, image, gender, status, species, type } = item;

  return (
    <div className={s.characterWrapper}>
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

      {isLoading && <p>Loading...</p>}

      <div className={s.character}>
        <img className={s.img} src={image} alt={name} />
        <h1 className={s.name}>{name}</h1>
        <div className={s.info}>
          <h2 className={s.infoTitle}>Informations</h2>
          <ul className={s.infoList}>
            <li className={s.infoListItem}>
              <h3>Gender</h3>
              <p>{gender}</p>
            </li>
            <li className={s.infoListItem}>
              <h3>Status</h3>
              <p>{status}</p>
            </li>
            <li className={s.infoListItem}>
              <h3>Specie</h3>
              <p>{species}</p>
            </li>
            <li className={s.infoListItem}>
              <h3>Origin</h3>
              <p>{origin}</p>
            </li>
            <li className={s.infoListItem}>
              <h3>Type</h3>
              <p>{type}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
