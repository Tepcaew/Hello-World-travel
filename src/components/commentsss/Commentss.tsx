import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addComment,
  fetchComment,
  fetchDeleteComment,
} from "../../features/CommentsSlice";
import styles from "./Comments.module.css";

const Comments = () => {
  const comments = useSelector((state) => state.comments.comments);
  const userId = useSelector((state) => state.application.user._id);

  const [text, setComment] = useState();

  const dispatch = useDispatch();
  const { eventId } = useParams();


  const myComment = comments.filter((item) => {
    if (item.eventId === eventId) {
      return item;
    }
  });

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ text, userId, eventId }));
    setComment("");
  };
  const handleDeleteComment = (commentId) => {
    dispatch(fetchDeleteComment(commentId));
  };

  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  return (
    <div className={styles.divs}>
      <div className={styles.divComment}>
        <form className={styles.form} action="" onSubmit={handleAddComment}>
          <input
            className={styles.inp}
            type="text"
            onChange={handleComment}
            value={text}
          />
          <button className={styles.btnAdd}>add comment</button>
        </form>
        <div>
          {myComment
            .map((item) => {
              return (
                <div className={styles.comment}>
                  <span className={styles.user}>
                    <img
                      className={styles.avatar}
                      src={`http://localhost:3077/${item.userId.avatar}`}
                      alt=""
                    /> 
                    <div>
                    {item.userId.login}</div>
                  </span>
                  <div className={styles.divText}>
                    <p className={styles.commentText}>{item.text}</p>
                    <button
                      className={styles.btnDelete}
                      onClick={() => {
                        handleDeleteComment(item._id);
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Comments;
