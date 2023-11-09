import React from 'react'

function Input({ title, type, name, id, value }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {title}
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                value={value}
            />
        </div>
    )
}

export default Input