import { useParams } from "react-router-dom";
import styled from "./SingleTask.module.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { CiEdit } from "react-icons/ci";

export default function SingleTask() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className={styled.header}>
            <h1>{info.title}</h1>
            <button className={styled.edit}>
              <CiEdit />
            </button>
          </div>
          <div className={styled.description}>{info.description}</div>
        </>
      )}
    </div>
  );
}
