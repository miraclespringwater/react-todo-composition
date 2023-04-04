const TaskShow = ({ task, onComplete, onDelete }) => {
  return (
    <li key={task.id}>
      <span
        style={(task.completed && { textDecoration: "line-through" }) || null}
      >
        {task.title}
      </span>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Complete Task</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
    </li>
  );
};

export default TaskShow;
