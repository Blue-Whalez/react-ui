import React, { PureComponent, Fragment } from 'react';

class Button extends PureComponent {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount = () => {
        let {variant, size, color, startIcon, endIcon, disabledShadow, text} = this.props;
        let finalClassName="button";
        /*Styling */
        if(variant && (variant=="outline" || variant=="text")){
          finalClassName+=" button--"+variant;
        }
        if(size && (size=="sm" || size=="lg")){
            finalClassName+=" button--"+size;
        }
        if(color && (color=="primary" || color=="secondary" || color=="danger" )){
            finalClassName+=" button--"+color;
        }
        if(disabledShadow){
            finalClassName+=" button--disableShadow";
        }
        /*Content*/
        let finalContent =this.props.text;
        if(startIcon){
            finalClassName+=" button--start-icon";
            finalContent= <React.Fragment><i className={startIcon}></i> {text} </React.Fragment>;
        }
        if(endIcon){
            finalClassName+=" button--end-icon";
            finalContent= <React.Fragment> {text} <i className={endIcon}></i></React.Fragment>;
        }


        this.setState({
            className:finalClassName,
            disabled: this.props.disabled? true : false,
            text: finalContent
        });
    }
    render() { 
        
        return ( 
            <Fragment>
                <button className={this.state.className} disabled={this.state.disabled}>{this.state.text}</button>
            </Fragment>
         );
    }
}
 
export default Button;