import { useNavigate, useParams } from "react-router-dom";
import styled from "./SingleTask.module.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function SingleTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setFormData({
          title: data.title,
          description: data.description,
        });
      })
      .finally(() => setIsLoading(false));
  }, [isSubmit]);

  const changeMode = () => {
    setIsChanging(true);
  };

  const submitChanges = (e) => {
    e.preventDefault();

    setIsSubmit(true);
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        date: info.date,
      }),
    }).finally(() => {
      setIsSubmit(false);
      setIsChanging(false);
    });
  };

  const removeTask = (id) => {
    setIsDeleting(true);

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    }).finally(() => {
      setIsDeleting(false);
      navigate("/");
    });
  };

  return (
    <div className={styled["single-page"]}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {isChanging ? (
            <form className={styled.from} onSubmit={submitChanges}>
              <input
                disabled={isSubmit}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
                name="title"
                className={styled["title-change"]}
                type="text"
                placeholder="Название задачи"
              />
              <textarea
                disabled={isSubmit}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                value={formData.description}
                name="description"
                rows={20}
                placeholder="Описание задачи"
                className={styled["description-change"]}
              ></textarea>

              <div className={styled["change-actions"]}>
                <button
                  disabled={isSubmit}
                  type="submit"
                  className={styled.save}
                >
                  {isSubmit ? <Loader /> : "Сохранить"}
                </button>
                <button
                  disabled={isSubmit}
                  type="button"
                  className={styled.cancel}
                  onClick={() => setIsChanging(false)}
                >
                  Отмена
                </button>
              </div>
            </form>
          ) : (
            <>
              <h1>{info.title}</h1>
              <div className={styled.description}>{info.description}</div>
            </>
          )}
          {!isChanging && (
            <div className={styled.actions}>
              <button
                disabled={isDeleting}
                onClick={changeMode}
                className={styled.edit}
              >
                <CiEdit />
                Изменить
              </button>
              <button
                disabled={isDeleting}
                onClick={() => removeTask(id)}
                className={styled.remove}
              >
                {isDeleting ? (
                  <Loader />
                ) : (
                  <>
                    <MdDelete />
                    Удалить
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
