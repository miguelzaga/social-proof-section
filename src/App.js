import { useState } from "react";
import Stars from "./components/Stars.js";
import ColtonImg from "/src/images/image-colton.jpg";
import IreneImg from "/src/images/image-irene.jpg";
import AnneImg from "/src/images/image-anne.jpg";
import bgTopMobile from "/src/images/bg-pattern-top-mobile.svg";
import bgTopDesktop from "/src/images/bg-pattern-top-desktop.svg";
import bgBottomMobile from "/src/images/bg-pattern-bottom-mobile.svg";
import bgBottomDesktop from "/src/images/bg-pattern-bottom-desktop.svg";

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
      img: IreneImg,
    },
    {
      name: "Anne Wallace",
      content:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      img: AnneImg,
    },
  ];

  return (
    <main className="section">
      <div className="section__top">
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
                <h2>{`Rated 5 Stars in ${author}`}</h2>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="section__reviews">
        {reviews.map(function (review, i) {
          return (
            <li key={`review-${i}`} className="section__review">
              <div className="section__review-profile">
                <img
                  className="section__review-img"
                  alt={`Profile picture of ${review.name}`}
                  src={review.img}
                />
                <div className="section__review-info">
                  <h2 className="section__review-name">{review.name}</h2>
                  <p className="section__review-verified">Verified Buyer</p>
                </div>
              </div>
              <p className="section__review-content">“ {review.content} ”</p>
            </li>
          );
        })}
      </ul>
      <picture>
        <source srcset={bgTopDesktop} media="(min-width: 1024px)" />
        <img className="section__bg-top" src={bgTopMobile} alt="" />
      </picture>
      <picture>
        <source srcset={bgBottomDesktop} media="(min-width: 1024px)" />
        <img className="section__bg-bottom" src={bgBottomMobile} alt="" />
      </picture>
    </main>
  );
}

export default App;
