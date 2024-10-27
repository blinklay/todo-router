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
  const [isDeleting, setIsDeleting] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .finally(() => setIsLoading(false));
  }, [refreshPage]);

  const removeTask = (id) => {
    setIsDeleting(true);

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setRefreshPage(!refreshPage))
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div className={styled["home"]}>
      <h1 className={styled["title"]}>Главная</h1>

      {isLoading && <div className={styled.loader}></div>}
      {!isLoading && (
        <TasksList
          isDeleting={isDeleting}
          tasks={tasks}
          removeTask={removeTask}
        />
      )}

      {!isLoading && tasks.length === 0 && <div>Пока ничего нет...</div>}
    </div>
  );
}
