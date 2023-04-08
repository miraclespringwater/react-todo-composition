import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskShow = ({ task, tasks, onComplete, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEdit = (data) => {
    onEdit(task.id, data);
    setShowEdit(false);
  };

  return (
    <li>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Complete Task</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
      <button onClick={() => handleEditClick()}>Edit Task</button>
      <span
        style={(task.completed && { textDecoration: "line-through" }) || null}
      >
        {(showEdit && (
          <TaskForm tasks={tasks} onSubmit={handleEdit} currentTask={task} />
        )) ||
          task.title}
      </span>
    </li>
  );
};

export default TaskShow;
