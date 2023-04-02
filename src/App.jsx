import { useState } from "react";

const genId = () => Math.round(Math.random() * 9999);

const App = () => {
  const [input, setInput] = useState("");
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

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(input);
    setInput("");
  };

  return (
    <div className="app">
      <div>To-Do App</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span
                style={
                  (task.completed && { textDecoration: "line-through" }) || null
                }
              >
                {task.title}
              </span>
              {!task.completed && (
                <button onClick={() => completeTaskById(task.id)}>
                  Complete Task
                </button>
              )}
              <button onClick={() => deleteTaskById(task.id)}>
                Delete Task
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
