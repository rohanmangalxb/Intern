import React from 'react'

const InputFields = (props) => {
    return (
        <div>
            <label htmlFor={props.label}>{props.label ? `${props.label}: `: ""}</label>
            <input
                type={props.type}
                id={props.label}
                value={props.value}
                onChange={props.onChange}
            />
            <div className='error-text'>{props.error}</div>
        </div>
        
    )
}

export default InputFields
