import React from 'react'
import QualityCard from './QualityCard'

function Quality() {
  return (
    <div className='nt-quality-container'>
        <h1>Passionate About Creating Quality Design</h1>

        <div className="nt-quality-wrap">
            <QualityCard green={true} purple={false} />
            <QualityCard green={false} purple={true} />
        </div>
    </div>
  )
}

export default Quality