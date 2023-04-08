import { Fragment } from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <Fragment>
      {tasks.map((task) => {
        return (
          <TaskShow
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        );
      })}
    </Fragment>
  );
};

export default TaskList;
