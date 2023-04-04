import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskShow task={task} onDelete={onDelete} onComplete={onComplete} />
        );
      })}
    </div>
  );
};

export default TaskList;
