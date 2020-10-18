// Styling

import React from 'react'
import '../box-styles.css'

function Box({size, inlineStyles}) {
  const boxColor = inlineStyles.backgroundColor
  const text = [size, boxColor, 'box'].join(' ')
  return (
    <div
      className={'box box--' + size}
      style={{fontStyle: 'italic', ...inlineStyles}}
    >
      {text}
    </div>
  )
}

const smallBox = (
  <Box size="small" inlineStyles={{backgroundColor: 'lightblue'}} />
)
const mediumBox = <Box size="medium" inlineStyles={{backgroundColor: 'pink'}} />
const largeBox = <Box size="large" inlineStyles={{backgroundColor: 'orange'}} />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
