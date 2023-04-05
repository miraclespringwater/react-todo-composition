const TaskShow = ({ task, onComplete, onDelete }) => {
  console.log("task show task:", task);
  return (
    <li>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Complete Task</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
      <span
        style={(task.completed && { textDecoration: "line-through" }) || null}
      >
        {task.title}
      </span>
    </li>
  );
};

export default TaskShow;
