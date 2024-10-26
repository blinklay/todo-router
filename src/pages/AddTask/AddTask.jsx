import { useEffect, useState } from "react";
import styled from "./AddTask.module.css";
import Loader from "../../components/Loader/Loader";

export default function AddTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isCreating, setIsCreating] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setIsCreating(true);
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        date: new Intl.DateTimeFormat().format(new Date()),
      }),
    }).finally(() => {
      setFormData({
        title: "",
        description: "",
      });
      setIsCreating(false);
    });
  };

  return (
    <>
      <h1>Добавить задачу</h1>
      <form onSubmit={onSubmit} className={styled.form}>
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          name="title"
          className={styled.title}
          type="text"
          placeholder="Название задачи"
          disabled={isCreating}
        />
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          name="description"
          rows={20}
          disabled={isCreating}
          placeholder="Описание задачи"
          className={styled.description}
        ></textarea>

        <button disabled={isCreating} className={styled.submit}>
          {isCreating ? <Loader /> : "Добавить"}
        </button>
      </form>
    </>
  );
}
