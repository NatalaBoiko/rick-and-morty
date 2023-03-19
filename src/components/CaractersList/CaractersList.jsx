import s from "./CaractersList.module.css";
import PropTypes from "prop-types";
import { sortItems } from "../../helpers/sortItems";

const CaractersList = ({ items }) => {
  const sortedItems = sortItems(items);

  const characters = sortedItems.map(({ id, name, image, species }) => (
    <li key={id} className={s.listItem}>
      <a href="/">
        <img src={image} alt={name} />
        <div className={s.descrWrapper}>
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
      </a>
    </li>
  ));

  return <ul className={s.list}>{characters}</ul>;
};

CaractersList.defaultProps = {
  items: [],
};
CaractersList.propTypes = {
  item: PropTypes.array,
};

export default CaractersList;
