import React from 'react'
import PricingCard from './PricingCard'

function Pricing() {
  return (
    <div className="nt-max-container flex flex-col justify-center items-center gap-10">
  <div className="flex w-[588px] flex-col items-center gap-3">
    <p className="text-container-text-primary text-center text-lg">Pricing</p>
    <h2 className="text-typography-heading text-center text-lg_2x">Unleash Your Pricing Potential: Maximize Value, Minimize Cost</h2>
  </div>
  <div className="flex items-start gap-6">
    <PricingCard />
    <PricingCard />
    <PricingCard />
  </div>

</div>
  )
}

export default Pricing

