import { useState } from 'react'
import './App.css'
import ReviewsSection from './pages/ratings/ReviewsSection';


function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div id="wrapper"> 
      <ReviewsSection />
    </div>
  );
}

export default App;
