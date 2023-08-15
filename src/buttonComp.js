import React from 'react'

export const Button = ({onClick, text, style}) => (
<button onClick={onClick} text={text} style={style}>
    {text}
</button>
)