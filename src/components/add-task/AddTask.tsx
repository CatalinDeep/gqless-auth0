import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, query, AddTaskInput, TaskOrderable } from "../../gqless";

const AddTask = () => {
  const [task, setTask] = useState<AddTaskInput>({
    completed: true,
    title: "",
    user: { username: "" },
  });
  const [addTask, { isLoading, data }] = useMutation(
    (mutation, args: AddTaskInput) => {
      const response = mutation.addTask({
        input: [args],
      });

      // response?.numUids;
      response?.task()?.map((task) => task?.id);
    },
    {
      refetchQueries: [
        query.queryTask({ first: 5, order: { desc: TaskOrderable.title } }),
      ],
    }
  );

  const { user } = useAuth0();

  useEffect(() => {
    setTask({ ...task, user: { username: user?.email || "" } });
  }, []);
  return (
    <div>
      <input
        value={task.title}
        placeholder="Task title"
        onChange={(event) => {
          setTask({ ...task, title: event.target.value });
        }}
      />
      <button
        onClick={() => {
          console.log(task);
          addTask({ args: task }).catch(console.error);
        }}
      >
        Add Task
      </button>
      {JSON.stringify(data)}
      {isLoading}
    </div>
  );
};

export default AddTask;
