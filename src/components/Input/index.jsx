import React, { Component, Fragment, useRef } from 'react';


const SIZE = ["sm"];
export const Input = ({
    id,
    name,
    size,
    value,
    label,
    placeholder,
    startIcon, 
    endIcon, 
    helpText,
    multiline,
    fullWidth,
    row,
    error,
    disabled
}) =>{
    const inputRef = useRef();
    let attr = {
        id,
        name,
        value: value!=='' ? value : null,
        placeholder,
        row,
        disabled: disabled? true : null,
    }
    let finalClassName="input__wrapper";
    if(size && SIZE.includes(size)){
        finalClassName+=" input--"+size;
    }
    if(fullWidth)
        finalClassName+=" input--fullwidth";
    if(error)
        finalClassName+=" input--error";
    if(disabled)
        finalClassName+=" input--disabled";

    let element = <input className="input__bar" type="text" ref={inputRef} {...attr}></input>
    if (multiline) {
        element= <textarea className="input__bar" type="text" ref={inputRef} {...attr}></textarea>
    }
    return (
        <div className={finalClassName}>
            {label? <label className="input__label" for={name}>{label}</label>: ''}
            {element}
            {helpText? <div className="input__help-text">{helpText}</div> : ''}
        </div>
    );
}
export default Input;