import { Fragment } from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <TaskShow
            key={task.id}
            tasks={tasks}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
