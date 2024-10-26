import TaskItem from "../TaskItem/TaskItem";
import styled from "./TasksList.module.css";
export default function TasksList({ tasks }) {
  return (
    <ul className={styled["list"]}>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}
