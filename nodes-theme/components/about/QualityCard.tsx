function QualityCard({ green, purple }) {
  return (
    <div
      className={`nt-quality-card-container ${
        green && "bg-component-fill-secondary-soft bg"
      } ${purple && "bg-component-fill-tertiary-soft"}`}
    >
      <h3 className={`${green && 'text-component-text-secondary'} ${purple && 'text-container-text-tertiary'}`}>Our mission </h3>
      <p>
        Maecenas vel risus id metus posuere luctus id eget mif usce congue odio
        vel felis aliquam, ac ultrices urna bibendum suisque nec odio quis justo
        pharetra dapibus non et quam. Maecenas vel risus id metus posuere luctus
        id eget mif usce congue odio vel felis aliquam, ac ultrices urna
        bibendum suisque nec odio quis justo pharetra dapibus non et quam.
      </p>
    </div>
  );
}

export default QualityCard;
