import { useState } from "react";
import genId from "../utils/genId";
import TaskCreate from "./TaskCreate";
import TaskShow from "./TaskShow";
import TaskList from "./TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    setTasks((oldTasks) => [
      ...oldTasks,
      { id: genId(), title, completed: false },
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

  const editTaskById = (id, newTitle) => {
    setTasks((oldTasks) => {
      oldTasks.map((task) => {
        return (task.id === id && { ...task, title: newTitle }) || task;
      });
    });
  };

  return (
    <div>
      <TaskCreate onCreate={createTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={completeTaskById}
        onEdit={editTaskById}
      />
    </div>
  );
};

export default Tasks;
