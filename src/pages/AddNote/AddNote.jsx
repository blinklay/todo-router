import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { COLORS } from "../../constants/colors";
import styled from "./AddNote.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction } from "../../actions/addNoteAction";
import { notesSelectCreating } from "../../selectors/notesSelec";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";

const initialFormData = {
  title: "",
  text: "",
  color: "#fe9973",
};

export default function AddNote() {
  const isCreating = useSelector(notesSelectCreating);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormData);

  const changeActiveColor = (color) => {
    setFormData({
      ...formData,
      color: color,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.title === "" || formData.text === "") return;
    dispatch(addNoteAction(formData));
    setFormData(initialFormData);
  };

  return (
    <div className={styled["add-note"]}>
      <PageTitle>Add Note</PageTitle>

      <form onSubmit={onSubmit} className={styled.form}>
        <div className={styled.colors}>
          {COLORS.map((color, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: color === formData.color ? 1.5 : 1,
              }}
              transition={{
                opacity: { delay: index * 0.1, duration: 0.5 },
                y: { delay: index * 0.1, duration: 0.5 },
                scale: { duration: 0.3, ease: "easeOut" },
              }}
              type="button"
              className={`${styled.color}`}
              key={color}
              style={{
                background: color,
              }}
              onClick={() => changeActiveColor(color)}
            ></motion.button>
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
