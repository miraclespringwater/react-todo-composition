import { useEffect, useState } from "react";
import genId from "./utils/genId";
import TaskForm from "./components/TaskForm";
import TaskShow from "./components/TaskShow";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(FILTER_CONFIG[filter].func);

  const createTask = (task) => {
    setTasks((oldTasks) => [
      ...oldTasks,
      { id: genId(), ...task, completed: false },
    ]);

    if (filter === "completed") {
      setFilter("all");
    }
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

  const toggleTaskCompletedById = (id) => {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        return (
          (task.id === id && { ...task, completed: !task.completed }) || task
        );
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
    <div className="w-screen max-w-full flex flex-col gap-9 justify-center items-center">
      <h1 className="text-4xl text-center w-full text-gray-50 py-10 bg-blue-500">
        To-Do App
      </h1>
      <div className="flex flex-col w-96 gap-1">
        <TaskForm onSubmit={createTask} tasks={tasks} />
        <ul>
          {filteredTasks.map((task) => {
            return (
              <TaskShow
                key={task.id}
                task={task}
                onDelete={deleteTaskById}
                onCompleteToggle={toggleTaskCompletedById}
                onEdit={editTaskById}
                renderEditForm={(handleSubmit) => (
                  <TaskForm
                    onSubmit={handleSubmit}
                    tasks={tasks}
                    currentTask={task}
                  />
                )}
              />
            );
          })}
        </ul>
        <div className="flex justify-start gap-2">
          {Object.entries(FILTER_CONFIG).map((entry) => {
            const key = entry[0];
            const { label } = entry[1];
            return (
              <button
                className={`border rounded text-gray-50 font-semibold
                            px-4 py-2 bg-blue-400 hover:opacity-90
                            ${(filter === key && "bg-blue-700") || ""}`}
                key={key}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            );
          })}
        </div>
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

export default App;
