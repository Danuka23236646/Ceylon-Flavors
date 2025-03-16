import React from 'react';
import { FaStar } from "react-icons/fa";

function ReviewList({ reviews }) {
  return (
    <div id="ReviewList">
      <h1>ReviewList</h1>

      <div style={styles.container}>
        <h3>Customer Reviews</h3>
        {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map((rev, index) => (
          <div key={index} style={styles.review}>
            <p>{rev.text}</p>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={15} color={i < rev.rating ? "gold" : "gray"} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "20px" },
  review: { padding: "10px", borderBottom: "1px solid #ddd" },
};

export default ReviewList;
