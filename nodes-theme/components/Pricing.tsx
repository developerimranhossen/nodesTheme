import React from 'react'
import PricingCard from './PricingCard'

function Pricing() {
  return (
    <div className="nt-pricing-container">
  <div className="nt-pricing-wrap">
    <p>Pricing</p>
    <h2>Unleash Your Pricing Potential: Maximize Value, Minimize Cost</h2>
  </div>
  <div className="nt-pricecard-wrap">
    <PricingCard />
    <PricingCard />
    <PricingCard />
  </div>

</div>
  )
}

export default Pricing

