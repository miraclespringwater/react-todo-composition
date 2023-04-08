import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

// changed onCreat to onEdit
const TaskEdit = ({ onEdit, tasks, currentTask }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    setError,
    setFocus,
    // change default value to use currentTask
  } = useForm({ defaultValues: { title: currentTask.title } });

  const isDuplicateTask = (data) =>
    tasks
      .filter((task) => task.id !== currentTask.id)
      .some((task) => {
        return task.title?.toLowerCase() === data.title.toLowerCase();
      });
  // change to filter out current task when checking duplicates

  const onSubmit = (data) => {
    console.log("edit form data", data);
    if (isDuplicateTask(data)) {
      setError(
        "title",
        { type: "custom", message: "Cannot enter duplicate tasks." },
        { shouldFocus: true }
      );
    } else {
      // change to onEdit
      onEdit(data);
      reset();
    }
  };

  const delayedClearErrors = useDebounce(clearErrors, 5000);
  if (Object.keys(errors).length > 0) {
    delayedClearErrors();
  }

  useEffect(() => {
    setFocus("title", { shouldSelect: true });
  }, [setFocus]);

  return (
    <div>
      {/* Change styling */}
      <form className="task-edit-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Change label */}
        <label>Task:</label>
        <input
          type="text"
          placeholder="Task name"
          {...register("title", {
            required: "Please enter a task.",
            minLength: {
              value: 3,
              message: "Task must be at least 3 characters.",
            },
          })}
        />
        {errors.title && <span>{errors.title?.message}</span>}
      </form>
    </div>
  );
};

export default TaskEdit;
