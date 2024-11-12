import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import styled from "./AddNote.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction } from "../../actions/addNoteAction";
import { notesSelectCreating } from "../../selectors/notesSelec";
import AddForm from "../../components/AddForm/AddForm";

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

      <AddForm
        onSubmit={onSubmit}
        changeActiveColor={changeActiveColor}
        isCreating={isCreating}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
