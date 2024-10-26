import { useEffect, useState } from "react";
import TasksList from "../../components/TasksList/TasksList";
import styled from "./Home.module.css";

const SERVER_DATA = [
  {
    id: 0,
    title: "Заголовок задачи",
    description:
      "Описание задачи, которое содержить в себе некоторое количество симолов. Описание нежно для того чтобы пользователь имел представление об объекте!",
    date: "22.10.2024",
    isCompleted: false,
  },
  {
    id: 1,
    title: "Заголовок задачи",
    description:
      "Описание задачи, которое содержить в себе некоторое количество симолов. Описание нежно для того чтобы пользователь имел представление об объекте!",
    date: "22.10.2024",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Заголовок задачи",
    description:
      "Описание задачи, которое содержить в себе некоторое количество симолов. Описание нежно для того чтобы пользователь имел представление об объекте!",
    date: "22.10.2024",
    isCompleted: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styled["home"]}>
      <h1 className={styled["title"]}>Главная</h1>

      {isLoading && <div className={styled.loader}></div>}
      {!isLoading && <TasksList tasks={tasks} />}
    </div>
  );
}
