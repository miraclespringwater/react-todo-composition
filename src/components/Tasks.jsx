import { useState } from "react";
import genId from "../utils/genId";
import TaskCreate from "./TaskCreate";
import TaskShow from "./TaskShow";
import TaskList from "./TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

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
    console.log("new task data", newTaskData);
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        console.log("editing task", { ...task, ...newTaskData });
        return (task.id === id && { ...task, ...newTaskData }) || task;
      });
    });
  };

  return (
    <div>
      <TaskCreate onCreate={createTask} tasks={tasks} />
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
