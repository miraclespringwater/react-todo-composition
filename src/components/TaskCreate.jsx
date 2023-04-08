import { useForm } from "react-hook-form";
import useDebounce from "../hooks/useDebounce";

const TaskCreate = ({ onCreate, tasks }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    setError,
  } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const isDuplicateTask = (data) =>
    tasks.some((task) => {
      return task.title?.toLowerCase() === data.title.toLowerCase();
    });

  const onSubmit = (data) => {
    if (isDuplicateTask(data)) {
      setError(
        "title",
        { type: "custom", message: "Cannot enter duplicate tasks." },
        { shouldFocus: true }
      );
    } else {
      onCreate(data);
      reset();
    }
  };

  const delayedClearErrors = useDebounce(clearErrors, 5000);
  if (Object.keys(errors).length > 0) {
    delayedClearErrors();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>New task:</label>
        <input
          type="text"
          placeholder="I need to..."
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

export default TaskCreate;
