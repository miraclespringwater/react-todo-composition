import { useEffect, useState } from "react";

const TaskFilter = ({ setFilter }) => {
  const [selected, setSelected] = useState("all");

  const handleClick = (event) => {
    const { value } = event.target;
    switch (value) {
      case "active":
        setFilter({ completed: false });
        break;
      case "completed":
        setFilter({ completed: true });
        break;
      case "all":
      default:
        setFilter({});
        break;
    }
    setSelected(value);
  };

  return (
    <div>
      <button
        value="all"
        onClick={handleClick}
        className={(selected === "all" && "active") || ""}
      >
        All
      </button>
      <button
        value="active"
        onClick={handleClick}
        className={(selected === "active" && "active") || ""}
      >
        Active
      </button>
      <button
        value="completed"
        onClick={handleClick}
        className={(selected === "completed" && "active") || ""}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
