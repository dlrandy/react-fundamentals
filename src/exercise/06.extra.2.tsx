// Styling
// http://localhost:3000/isolated/final/05.js
import * as React from 'react'
import '../box-styles.css'

function Box({
  style = {},
  size,
  className = '',
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: 'small' | 'medium' | 'large'
}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export {App}
