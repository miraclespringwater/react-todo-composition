const { useState } = require("react");

const useFilter = (data, initialFilter = {}) => {
  const [filter, setFilter] = useState(initialFilter);

  if (Object.keys(filter).length === 0) {
    return {
      filter,
      setFilter,
      filteredData: data,
    };
  }

  let filteredData = data.filter((item) => {
    return Object.entries(filter).every((filterEntry) => {
      const [filterKey, filterValue] = filterEntry;
      return item[filterKey] === filterValue;
    });
  });

  return {
    filter,
    setFilter,
    filteredData,
  };
};

export default useFilter;
