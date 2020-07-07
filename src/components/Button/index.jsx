import React, { PureComponent, Fragment } from 'react';


const COLORS = ["primary", "secondary", "danger"];
const VARIANT = ["text", "outline"];
const SIZE = ["sm", "lg"];


export const Button = ({
        type,
        href,
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
        href: href ? true : null
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
    <a type="button" className={finalClassName} {...attr}>
      {finalContent}
    </a>
  );
};

export default Button;


// class Button extends PureComponent {
//     constructor(props){
//         super(props);
//         this.state={};
//     }
//     componentDidMount = () => {
//         let {variant, size, color, startIcon, endIcon, disabledShadow, text} = this.props;
//         let finalClassName="button";
//         /*Styling */
//         if(variant && (variant=="outline" || variant=="text")){
//           finalClassName+=" button--"+variant;
//         }
//         if(size && (size=="sm" || size=="lg")){
//             finalClassName+=" button--"+size;
//         }
//         if(color && (color=="primary" || color=="secondary" || color=="danger" )){
//             finalClassName+=" button--"+color;
//         }
//         if(disabledShadow){
//             finalClassName+=" button--disableShadow";
//         }
//         /*Content*/
//         let finalContent =this.props.text;
//         if(startIcon){
//             finalClassName+=" button--start-icon";
//             finalContent= <React.Fragment><i className={startIcon}></i> {text} </React.Fragment>;
//         }
//         if(endIcon){
//             finalClassName+=" button--end-icon";
//             finalContent= <React.Fragment> {text} <i className={endIcon}></i></React.Fragment>;
//         }


//         this.setState({
//             className:finalClassName,
//             disabled: this.props.disabled? true : false,
//             text: finalContent
//         });
//     }
//     render() { 
        
//         return ( 
//             <Fragment>
//                 <button className={this.state.className} disabled={this.state.disabled}>{this.state.text}</button>
//             </Fragment>
//          );
//     }
// }
 
// export default Button;