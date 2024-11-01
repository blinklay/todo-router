import styled from "./Note.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { FaCheck } from "react-icons/fa";

export default function Note({ id, text, color, isImportant }) {
  const {isEditing, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text);

  const onSubmit = () => {
    dispatch({
      type: "SUBMIT_CHANGES_NOTE",
      payload: {
        text: value,
        id,
        color,
        isImportant,
      },
    });
  };

  return (
    <li
      className={`${styled.note} ${isEditing ? styled["edit-mode"] : ""}`}
      style={{
        background: color,
      }}
    >
      {isEdit ? (
        <>
          <textarea
            name="text"
            className={styled.area}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></textarea>

          <button onClick={onSubmit} className={styled.save}>
            <FaCheck />
          </button>
        </>
      ) : (
        <>
          <div className={styled.text}>{text}</div>

          {isImportant && (
            <button className={styled.important}>
              <FaStar />
            </button>
          )}

          <button className={styled.edit} onClick={() => setIsEdit(true)}>
            <MdModeEditOutline />
          </button>
        </>
      )}
    </li>
  );
}
