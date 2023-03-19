export const sortItems = (items) => {
  const compareNames = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  };
  return items.sort(compareNames);
};
