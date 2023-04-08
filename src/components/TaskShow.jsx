import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskShow = ({
  task,
  onCompleteToggle,
  onDelete,
  onEdit,
  renderEditForm,
}) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEdit = (data) => {
    onEdit(task.id, data);
    setShowEdit(false);
  };

  return (
    <li className="w-full flex gap-1">
      <button onClick={() => onCompleteToggle(task.id)}>
        {(task.completed && "🔘") || "⚪"}
      </button>
      <div className="flex-grow mx-1">
        {(showEdit && renderEditForm(handleEdit)) || (
          <span
            className="block border border-gray-50 border-opacity-0 w-full py-2 px-3
                       text-gray-700 leading-tight "
            style={
              (task.completed && { textDecoration: "line-through" }) || null
            }
          >
            {task.title}
          </span>
        )}
      </div>
      <ActionButton onClick={() => onDelete(task.id)}>❌</ActionButton>
      <ActionButton
        className={(showEdit && "opacity-30") || ""}
        onClick={() => handleEditClick()}
      >
        ✍️{}
      </ActionButton>
    </li>
  );
};

const ActionButton = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={`hover:opacity-50 transition-opacity duration-150 ${
      className || ""
    }`}
  >
    {children}
  </button>
);

export default TaskShow;
