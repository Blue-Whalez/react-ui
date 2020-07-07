import React from 'react';


const COLORS = ["primary", "secondary", "danger"];
const VARIANT = ["text", "outline"];
const SIZE = ["sm", "lg"];


export const Button = ({
        onClick,
        variant, 
        size, 
        color, 
        startIcon, 
        endIcon, 
        text, 
        disabledShadow, 
        disabled
    }) => {

    let attr = {
        disabled: disabled ? true : null,
        onClick: onClick ? onClick : null
    };

    let finalClassName="button";
    /*Styling */
    if(variant && VARIANT.includes(variant)){
        finalClassName+=" button--"+variant;
    }
    if(size && SIZE.includes(size)){
        finalClassName+=" button--"+size;
    }
    if(color && COLORS.includes(color)){
        finalClassName+=" button--"+color;
    }
    if(disabledShadow){
        finalClassName+=" button--disableShadow";
    }
    /*Content*/
    let finalContent =text;
    if(startIcon){
        finalClassName+=" button--start-icon";
        finalContent= <React.Fragment><i className={`fa fa-${startIcon}`}></i> {text} </React.Fragment>;
    }
    if(endIcon){
        finalClassName+=" button--end-icon";
        finalContent= <React.Fragment> {text} <i className={`fa fa-${endIcon}`}></i></React.Fragment>;
    }


  return (
    <button className={finalClassName} {...attr}>
      {finalContent}
    </button>
  );
};

export default Button;
