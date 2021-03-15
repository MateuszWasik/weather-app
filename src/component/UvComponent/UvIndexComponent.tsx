import React from 'react'

type UvProps = {
  uvi: number
}

export function UvIndexComponent({uvi}: UvProps) {
  return(
    <div className="uv-index-component">
      <div className="uv-index-component-title">
        <span>UV Index</span>
      </div>
      <div className="uv-index-value">
        <span>{uvi}</span>
      </div>
    </div>
  )
}