import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

import styles from "./Modal.module.scss";

const Modal = ({ closeModal }) => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: new Date(),
      text: todoText,
    });
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHead}>
          <h2 className={styles.modalHeadText}>Add New Todo</h2>
          <button className={styles.modalHeadBtn} onClick={closeModal}>
            Close
          </button>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <div className={styles.formInput}>
            <label className={styles.label}>Text</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Fix the Bug..."
              onChange={(event) => setTodoText(event.target.value)}
            />
          </div>
          <button className={styles.formBtn} type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
