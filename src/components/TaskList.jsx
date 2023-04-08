import { Fragment } from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default TaskList;
