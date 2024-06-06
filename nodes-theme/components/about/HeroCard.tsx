import React from "react";

function HeroCard() {
  return (
    <div className="nt-hero-card-container">
      <hr />
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
        >
          <circle cx="3" cy="3" r="3" fill="#151A2D" />
        </svg>{" "}
        <span>studio musings</span>
      </p>
      <h2>world of creativity</h2>
      <span>
        Maecenas vel risus id metus posuere luctus id eget mif usce congue odio
        vel felis aliquam, ac ultrices urna bibendum suisque nec odio quis justo
        pharetra dapibus non et quam.
      </span>
    </div>
  );
}

export default HeroCard;
