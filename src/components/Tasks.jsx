import { useState } from "react";
import useFilter from "../hooks/useFilter";
import genId from "../utils/genId";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const { filteredData: filteredTasks, setFilter } = useFilter(tasks);

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
      <TaskFilter setFilter={setFilter} />
    </div>
  );
};

export default Tasks;
