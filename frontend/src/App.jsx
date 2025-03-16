import React, { useState } from "react";
import ReviewForm from "./components/ratings/ReviewForm";
import ReviewList from "./components/ratings/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ceylon Flavours - Reviews & Ratings</h1>
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
