import React, { useContext, useEffect, useState } from "react";

import { TodoContext } from "../../context/TodoContext";

//Components
import Modal from "../modal/Modal";
import Todos from "./Todos";

// Styles
import styles from "./Home.module.scss";

const Home = () => {
  const { message, setMessage } = useContext(TodoContext);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (message) {
      const messageTimeOut = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(messageTimeOut);
    }
  }, [message, setMessage]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoHeading}>
        <h1 className={styles.headText}>To-Do Now</h1>
        <button className={styles.addBtn} onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <Todos />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
