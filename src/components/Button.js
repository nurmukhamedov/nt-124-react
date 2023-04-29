import React from 'react'

export const Button = () => {
    const MyStyle = {
        color: 'red',
        fontSize: '18px'
    }
    return (
        <button style={MyStyle}>Click button</button>
    )
}

export const Input = () => {
    return (
        <input type="text" placeholder='name' />
    )
}
