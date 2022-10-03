import { useState } from "react";

function App() {
  return (
    <main>
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
      <ul>
        <li>Rated 5 Stars in Reviews</li>
        <li>Rated 5 Stars in Report Guru</li>
        <li>Rated 5 Stars in BestTech</li>
      </ul>
      <ul>
        <li>
          {" "}
          Colton Smith Verified Buyer "We needed the same printed design as the
          one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!"{" "}
        </li>
        <li>
          {" "}
          Irene Roberts Verified Buyer "Customer service is always excellent and
          very quick turn around. Completely delighted with the simplicity of
          the purchase and the speed of delivery."{" "}
        </li>
        <li>
          Anne Wallace Verified Buyer "Put an order with this company and can
          only praise them for the very high standard. Will definitely use them
          again and recommend them to everyone!"{" "}
        </li>
      </ul>
    </main>
  );
}

export default App;
