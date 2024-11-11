import { useNavigate, useParams } from "react-router";
import styled from "./SingleNote.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeNoteAction } from "../../actions/removeNoteAction";
import { notesSelectDeleting } from "../../selectors/notesSelec";

export default function SingleNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isDeleting = useSelector(notesSelectDeleting);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/notes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setNote(data);
      })
      .catch((err) => {
        console.log(err.message);
        navigate("/");
      })
      .finally(() => setIsLoading(false));
  }, [isDeleting]);

  const removeNote = () => {
    dispatch(removeNoteAction(id));
  };

  return (
    <div className={styled.note}>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className={styled.wrapper}>
          <PageTitle>{note.title}</PageTitle>

          <div className={styled.text}>{note.text}</div>

          <div
            className={`${styled.actions} ${isDeleting ? styled.deleting : ""}`}
          >
            <button onClick={removeNote} className={styled.remove}>
              <MdDelete /> Delete
            </button>
            <button className={styled.edit}>
              <MdEdit /> Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
