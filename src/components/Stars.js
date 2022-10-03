import iconStart from "/src/images/icon-star.svg";

function Stars() {
  let temp = [1, 2, 3, 4, 5];
  return (
    <div className="section__rating-stars">
      {temp.map(function (i) {
        return (
          <img
            key={`star-${i}`}
            className="section__rating-star"
            src={iconStart}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default Stars;
