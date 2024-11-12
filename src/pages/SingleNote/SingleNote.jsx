import { useNavigate, useParams } from "react-router";
import styled from "./SingleNote.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeNoteAction } from "../../actions/removeNoteAction";
import {
  notesSelectDeleting,
  notesSelectEditing,
} from "../../selectors/notesSelec";
import AddForm from "../../components/AddForm/AddForm";
import { editNodeAction } from "../../actions/editNodeAction";

export default function SingleNote() {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pageNotFound, setPageNotFound] = useState(null);
  const isDeleting = useSelector(notesSelectDeleting);
  const isEditing = useSelector(notesSelectEditing);
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  const changeActiveColor = (color) => {
    setFormData({
      ...formData,
      color: color,
    });
  };

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
        setPageNotFound(err.message);
      })
      .finally(() => {
        setIsEditMode(false);
        setIsLoading(false);
      });
  }, [isDeleting, isEditing]);

  useEffect(() => {
    setFormData({
      title: note.title,
      text: note.text,
      color: note.color,
      isImportant: note.isImportant,
    });
  }, [note]);

  const removeNote = () => {
    dispatch(removeNoteAction(id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.title === "" || formData.text === "") return;
    dispatch(editNodeAction({ id, formData }));
  };

  return (
    <div className={styled.note}>
      {isLoading && <Loader />}
      {!pageNotFound && !isLoading && (
        <div className={styled.wrapper}>
          {isEditMode ? (
            <AddForm
              formData={formData}
              setFormData={setFormData}
              changeActiveColor={changeActiveColor}
              onSubmit={onSubmit}
              isCreating={isEditing}
            />
          ) : (
            <>
              <PageTitle>{note.title}</PageTitle>

              <div className={styled.text}>{note.text}</div>

              <div className={`${styled.actions}`}>
                <button onClick={removeNote} className={styled.remove}>
                  <MdDelete /> Delete
                </button>
                <button
                  onClick={() => setIsEditMode(true)}
                  className={styled.edit}
                >
                  <MdEdit /> Edit
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {!isLoading && pageNotFound && (
        <dic>{pageNotFound} - page Notes not found</dic>
      )}
    </div>
  );
}
