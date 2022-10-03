import { useState } from "react";
import Stars from "./components/Stars.js";
import ColtonImg from "/src/images/image-colton.jpg";

function App() {
  var ratingAuthors = ["Reviews", "Report Guru", "BestTecth"];
  var reviews = [
    {
      name: "Colton Smith",
      content:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
      img: ColtonImg,
    },
    {
      name: "Irene Roberts",
      content:
        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      img: ColtonImg,
    },
    {
      name: "Anne Wallace",
      content:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      img: ColtonImg,
    },
  ];

  return (
    <main className="section">
      <div className="section__main">
        <h1 className="section__title">
          10,000+ of our users love our products.
        </h1>
        <p className="section__text">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <ul className="section__ratings">
        {ratingAuthors.map(function (author, i) {
          return (
            <li key={`author-${i}`} className="section__rating">
              <Stars />
              {`Rated 5 Stars in ${author}`}
            </li>
          );
        })}
      </ul>
      <ul className="section__reviews">
        {reviews.map(function (review, i) {
          return (
            <li key={`review-${i}`} className="section__review">
              <div className="section__review-profile">
                <img className="section__review-img" alt="" src={review.img} />
                <div className="section__review-info">
                  <b className="section__review-name">{review.name}</b>
                  <p className="section__review-verified">Verified Buyer</p>
                </div>
              </div>
              <p className="section__review-content">{review.content}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
