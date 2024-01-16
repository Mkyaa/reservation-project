import React from 'react'

const Button = ({ text, onClick, type, disabled, className }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button