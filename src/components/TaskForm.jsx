import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useDebounce from "../hooks/useDebounce";

const TaskForm = ({ onSubmit, tasks, currentTask }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    setError,
    setFocus,
  } = useForm({
    defaultValues: {
      title: currentTask?.title || "",
    },
  });

  const isDuplicateTask = (data) => {
    let allTasks = [...tasks];
    if (currentTask) {
      allTasks = allTasks.filter((task) => task.id !== currentTask.id);
    }
    return allTasks.some((task) => {
      return task.title?.toLowerCase() === data.title.toLowerCase();
    });
  };

  const formSubmit = (data) => {
    if (isDuplicateTask(data)) {
      setError(
        "title",
        { type: "custom", message: "Cannot enter duplicate tasks." },
        { shouldFocus: true }
      );
    } else {
      onSubmit(data);
      reset();
    }
  };

  const delayedClearErrors = useDebounce(clearErrors);
  if (Object.keys(errors).length > 0) {
    delayedClearErrors();
  }

  useEffect(() => {
    setFocus("title", { shouldSelect: true });
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {!currentTask && <label>Task Name:</label>}
      <input
        type="text"
        placeholder="I need to..."
        autoFocus
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
  );
};

export default TaskForm;
