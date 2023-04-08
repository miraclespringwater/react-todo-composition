import { useEffect, useState } from "react";
import genId from "../utils/genId";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(FILTER_CONFIG[filter].func);

  const createTask = (task) => {
    setTasks((oldTasks) => [
      ...oldTasks,
      { id: genId(), ...task, completed: false },
    ]);
  };

  const deleteTaskById = (id) => {
    setTasks((oldTasks) =>
      oldTasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const completeTaskById = (id) => {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        return (task.id === id && { ...task, completed: true }) || task;
      })
    );
  };

  const editTaskById = (id, newTaskData) => {
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        return (task.id === id && { ...task, ...newTaskData }) || task;
      });
    });
  };

  return (
    <div>
      <TaskForm onSubmit={createTask} tasks={tasks} />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTaskById}
        onComplete={completeTaskById}
        onEdit={editTaskById}
      />
      <div>
        {Object.entries(FILTER_CONFIG).map((entry) => {
          const key = entry[0];
          const { label } = entry[1];
          return (
            <button
              className={(filter === key && "active") || ""}
              key={key}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const FILTER_CONFIG = {
  all: {
    func: () => true,
    label: "All",
  },
  active: {
    func: (task) => !task.completed,
    label: "Active",
  },
  completed: {
    func: (task) => task.completed,
    label: "Completed",
  },
};
export default Tasks;
