import React from "react";
import { TaskOrderable, useQuery } from "../../gqless";

const UserTasks = () => {
  const query = useQuery();
  return (
    <div>
      Your Tasks:
      <ol>
        {query
          .queryTask({ first: 5, order: { desc: TaskOrderable.title } })
          ?.map((task, index) => {
            return <li key={index.toString()}>{task?.title}</li>;
          })}
      </ol>
    </div>
  );
};

export default UserTasks;
