import React from 'react'

const Button = ({ bg, textColor,children }) => {
  return (
    <button style={{ backgroundColor: bg, color: textColor,outlineColor: bg }}>
        {children}
    </button>
  )
}

export default Button