import styled from "./Note.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { FaCheck } from "react-icons/fa";

export default function Note({ id, text, color, isImportant }) {
  const { isEditing, isChoiceMode, choiced, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text);

  const isChoiced = choiced.includes(id);

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

  const onDoubleClick = () => {
    if (isChoiceMode) return;
    dispatch({
      type: "SET_IMPORTANT_NTOE",
      payload: {
        text,
        id,
        color,
        isImportant: !isImportant,
      },
    });
  };

  const onStartClick = () => {
    dispatch({
      type: "SET_IMPORTANT_NTOE",
      payload: {
        text,
        id,
        color,
        isImportant: false,
      },
    });
  };

  const toChoiced = () => {
    if (!isChoiceMode) return;
    dispatch({ type: "ADD_TO_CHOICED", payload: id });
  };

  return (
    <li
      onClick={toChoiced}
      onDoubleClick={onDoubleClick}
      className={`${styled.note} ${isEditing ? styled["edit-mode"] : ""} ${
        isChoiceMode ? styled.waiting : ""
      }`}
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

          {isChoiced && <div className={styled.point}></div>}

          {!isChoiceMode && isImportant && (
            <button className={styled.important} onClick={onStartClick}>
              <FaStar />
            </button>
          )}

          {!isChoiceMode && (
            <button className={styled.edit} onClick={() => setIsEdit(true)}>
              <MdModeEditOutline />
            </button>
          )}
        </>
      )}
    </li>
  );
}
