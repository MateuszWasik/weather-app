import React from "react"
import './VisibilityComponent.sass'

type VisibilityProps = {
  visibility: number
}

export function VisibilityComponent({visibility}: VisibilityProps) {
  return (
    <div className="visibility-component">
      <div className="visibility-component-title">
        <span>Visibility</span>
      </div>
      <div className="visibility-component-value">
        <span>{visibility / 1000} km</span>
      </div>
    </div>
  )
}