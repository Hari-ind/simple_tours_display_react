import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  //console.log(name);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readmore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadmore(!readmore)}>
          {readmore ? "show less" : "read more"}
        </button>

        <div>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
