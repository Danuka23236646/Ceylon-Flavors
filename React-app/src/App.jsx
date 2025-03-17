import { useState } from 'react'
import './App.css'



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
