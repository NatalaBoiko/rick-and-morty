import s from "./BattonsList.module.css";
import PropTypes from "prop-types";

import Button from "../../components/Button/Button";

const BattonsList = ({ setPage, page, next }) => {
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadLess = () => {
    setPage((prevPage) => prevPage - 1);
  };
  return (
    <div className={s.btnsList}>
      {page > 1 && (
        <Button
          onClick={loadLess}
          title={page - 1}
          type="button"
          className={s.loadBtn}
        />
      )}

      {page && (
        <Button
          // onClick={loadLess}
          title={page}
          type="button"
          className={s.currentBtn}
        />
      )}

      {next && (
        <Button
          onClick={loadMore}
          title={page + 1}
          type="button"
          className={s.loadBtn}
        />
      )}
    </div>
  );
};

BattonsList.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
  next: PropTypes.string,
};

export default BattonsList;
