import s from "./BattonsList.module.css";
import Button from "../../components/Button/Button";

const BattonsList = ({ loadLess, loadMore, page, next }) => {
  console.log("qw");

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
          // title="Load more"
          title={page + 1}
          type="button"
          className={s.loadBtn}
        />
      )}
    </div>
  );
};

export default BattonsList;
