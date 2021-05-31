import React, { useState, useEffect } from "react";
import "./Post.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { db } from "../firebase";
import firebase from "firebase";

function Post({ imgurl, username, caption, postId, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="posts">
      <div className="posts__header">
        <AccountCircleIcon className="posts__avatar" />
        <h5>{username}</h5>
      </div>
      <img src={imgurl} alt="" className="posts__image" />

      <h4 className="posts__text">
        <strong>{username}</strong> {caption}
      </h4>

      <div className="post__comment">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className="comment__form">
          <input
            className="post__input"
            type="text"
            placeholder="add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__postbutton"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
