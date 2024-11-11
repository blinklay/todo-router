import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { COLORS } from "../../constants/colors";
import styled from "./AddNote.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction } from "../../actions/addNoteAction";
import { notesSelectCreating } from "../../selectors/notesSelec";
import Loader from "../../components/Loader/Loader";
export default function AddNote() {
  const isCreating = useSelector(notesSelectCreating);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    color: "#fe9973",
  });

  const changeActiveColor = (color) => {
    setFormData({
      ...formData,
      color: color,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addNoteAction(formData));
  };

  return (
    <div className={styled["add-note"]}>
      <PageTitle>Add Note</PageTitle>

      <form onSubmit={onSubmit} className={styled.form}>
        <div className={styled.colors}>
          {COLORS.map((color) => (
            <button
              type="button"
              onClick={() => changeActiveColor(color)}
              className={`${styled.color} ${
                color === formData.color ? styled.active : ""
              }`}
              key={color}
              style={{
                background: color,
              }}
            ></button>
          ))}
        </div>

        <div className={styled.row}>
          <label className={styled.label} htmlFor="title">
            Title
          </label>
          <input
            value={formData.title}
            className={styled.input}
            name="title"
            id="title"
            type="text"
            placeholder="Enter title..."
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            disabled={isCreating}
          />
        </div>

        <div className={styled.row}>
          <label className={styled.label} htmlFor="text">
            Description
          </label>
          <textarea
            value={formData.text}
            className={styled.textarea}
            name="text"
            id="text"
            placeholder="Enter description..."
            rows="20"
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            disabled={isCreating}
          ></textarea>
        </div>

        <button disabled={isCreating} type="submit" className={styled.submit}>
          {isCreating ? (
            <Loader
              style={{
                borderLeftColor: "#fff",
              }}
            />
          ) : (
            "add"
          )}
        </button>
      </form>
    </div>
  );
}
