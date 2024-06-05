import CustomButton from "../CustomButton";
import NumberCard from "./NumberCard";

function Member() {
  return (
    <div className="nt-member-container">
      <div className="nt-text-wrap">
        <h1>Our numbers speak for itself</h1>
        <p>
          Our impressive metrics are a testament to the effectiveness of our
          product and customer satisfaction.
        </p>
        <CustomButton>Start build today</CustomButton>
      </div>
      <div className="nt-card-wrap">
        <div className="nt-left-card">
          <NumberCard green={true}>
            <h1>10K+</h1>
            <p>Companies use Sense</p>
          </NumberCard>
          <NumberCard puplish={true}>
            <h1>$5M+</h1>
            <p>Raised in Series</p>
          </NumberCard>
        </div>
        <NumberCard red={true}>
          <h1>2015</h1>
          <p>Year founded</p>
        </NumberCard>
      </div>
    </div>
  );
}

export default Member;
