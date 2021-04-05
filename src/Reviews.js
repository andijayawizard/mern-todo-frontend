import React from 'react'
import './App.css'

function Reviews() {
  const reviews = [
    {
      nama: 'dadang',
      alamat: 'bandung'
    },
    {
      id: 1,
      name: "anton",
      review: "harga murah",
    },
    {
      id: 2,
      name: "budi",
      review: "produk baik",
    },
    {
      id: 3,
      name: "cepot",
      review: "mutu bersaing",
    },
  ];
  const listReviews = reviews.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      {/* <img src="resihani.jpg" alt={itemReview.name} /> */}
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="ReviewBox">
      <h2>Reviews</h2>
      {listReviews}
    </div>
  );
}

export default Reviews;