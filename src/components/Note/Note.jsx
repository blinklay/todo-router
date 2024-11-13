import styled from "./Note.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeNoteAction } from "../../actions/removeNoteAction";
import { notesSelectDeleting } from "../../selectors/notesSelec";
import Loader from "../Loader/Loader";
import StarButton from "../../StarButton/StarButton";
import { toggleNoteStatusAction } from "../../actions/toggleNoteStatusAction";

const changeString = (string, limit) => {
  if (string.length > limit) {
    return string.split("").slice(0, limit).join("") + "...";
  }
  return string;
};

export default function Note({ id, index, text, color, title, isImportant }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(notesSelectDeleting);

  const removeNote = () => {
    dispatch(removeNoteAction(id));
  };

  const toggleImportant = () => {
    dispatch(
      toggleNoteStatusAction({
        id,
        formData: { text, title, color, isImportant },
      })
    );
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`${styled.note} ${isDeleting ? styled.deleting : ""}`}
      style={{
        background: color,
      }}
    >
      <Link to={`/note/${id}`} className={styled.link}>
        <h3 className={styled.title}>{changeString(title, 15)}</h3>
        <div className={styled.text}>{changeString(text, 145)}</div>
      </Link>
      {isImportant && (
        <StarButton
          onClick={toggleImportant}
          isActive={isImportant}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      )}
      <button onClick={removeNote} className={styled.remove}>
        {isDeleting ? (
          <Loader
            style={{
              width: "21px",
              height: "21px",
              borderWidth: "3px",
              borderLeftColor: "#fff",
            }}
          />
        ) : (
          <MdDelete />
        )}
      </button>
    </motion.li>
  );
}
