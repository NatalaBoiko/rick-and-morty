import "./caracters-list.css";
import PropTypes from "prop-types";
import { sortItems } from "../../helpers/sortItems";

// const items = [];

const CaractersList = ({ items }) => {
  const sortedItems = sortItems(items);
  console.dir(items);

  const characters = sortedItems.map(({ id, name, image, species }) => (
    <li key={id} className="list-item">
      <a href="/">
        <img src={image} alt={name} />
        <div className="descr-wrapper">
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
      </a>
    </li>
  ));

  return <ul className="list">{characters}</ul>;
};

CaractersList.defaultProps = {
  items: [],
};
CaractersList.propTypes = {
  item: PropTypes.array,
};

export default CaractersList;
