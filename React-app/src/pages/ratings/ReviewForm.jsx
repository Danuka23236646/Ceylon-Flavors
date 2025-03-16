import React, { useState } from "react";
import StarRating from "./StarRating";
import "./rating.css";

function ReviewForm({ addReview }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review) return;
    addReview({ text: review, rating });
    setReview("");
    setRating(0);
  };

  return (
    <div>
      <div id="review"></div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3>Leave a Review</h3>
        <StarRating rating={rating} setRating={setRating} />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  form: { textAlign: "center", margin: "20px 0" },
  textarea: { width: "80%", height: "100px", fontSize: "16px", margin: "10px 0" },
  button: { padding: "10px 20px", backgroundColor: "#ff6600", color: "white", border: "none", cursor: "pointer" },
};

export default ReviewForm;
