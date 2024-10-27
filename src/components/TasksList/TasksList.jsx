import TaskItem from "../TaskItem/TaskItem";
import styled from "./TasksList.module.css";
export default function TasksList({ tasks, removeTask, isDeleting }) {
  return (
    <ul className={styled["list"]}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          removeTask={removeTask}
          isDeleting={isDeleting}
        />
      ))}
    </ul>
  );
}
