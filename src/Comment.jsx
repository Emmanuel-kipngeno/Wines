import { useState } from "react";

const Comment = ({ comments, setComments }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePlaceComment = () => {
    if (comment.trim() !== "") {
      setComments((previousComments) => [
        ...previousComments,
        { text: comment, date: new Date().toLocaleString() },
      ]);
      setComment("");
    }
  };

  return (
    <>
      <div className="Comment-Area">
        <input
          type="text"
          placeholder="How was the experience?"
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handlePlaceComment}>Buzz Here!</button>
      </div>
      <div className="comment-section">
        {comments.slice(0, 3).map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p>
            <p className="comment-date">{comment.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comment;
