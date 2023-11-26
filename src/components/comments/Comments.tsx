import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, fetchComment } from "../../features/commentsSlice";
import styles from "./Comments.module.css";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [text, setText] = useState("");
  const eventId = id;

  const myEvent = comments.filter((item) => id === item.eventId);
  const userId = useSelector((state) => state.application.user._id);


  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handlePush = (e) => {
    e.preventDefault();
    dispatch(addComment({ text, eventId, userId }));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);
  return (
    <div className={styles.commentContainer}>
      <form className={styles.form} action="" onSubmit={handlePush}>
        <input type="text" onChange={handleText} />
        <button>добавить комментарий</button>
      </form>
      <div className={styles.comments}>
        {myEvent.map((item) => {
          return (
            <div className={styles.comment}>
              <div>
                <img src={`http://localhost:3077/${item?.userId.avatar}`} className={styles.logo} alt="" />
                <p>{item?.userId.login}</p>
              </div>
              <div className={styles.text}>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
