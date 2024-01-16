import React from 'react'

const Input = ({ type, placeholder, value, onChange, name, id, className, icon, ...props }) => {
    return (
        <div className={className}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                {...props}
            />
            {icon}
        </div>
    )
}

export default Input