import { useState } from 'react'
import './App.css'
import ReviewsSection from './pages/ratings/ReviewsSection';
import AddToCart from './pages/cart/AddtoCart.jsx';


function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div id="wrapper"> 
  
    
    </div>
  );
}

export default App;
