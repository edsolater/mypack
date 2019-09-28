import React from 'react'

export function absolute(Component) {
  return props => (
    <div className="absoluteBox">
      <Component {...props}></Component>
    </div>
  )
}
