import { Fragment } from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onComplete }) => {
  console.log("task list tasks:", tasks);
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
