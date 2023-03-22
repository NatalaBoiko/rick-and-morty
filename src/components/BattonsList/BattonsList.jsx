import s from "./BattonsList.module.css";
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

export default BattonsList;
