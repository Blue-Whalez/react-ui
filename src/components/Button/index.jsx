import React, { PureComponent, Fragment } from 'react';

class Button extends PureComponent {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount = () => {
        let {variant, size, color, startIcon, endIcon, disabledShadow} = this.props;
        let finalClassName="button";
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
        this.setState({
            className:finalClassName,
            disabled: this.props.disabled? "disabled" : "",
        });
    }
    render() { 
        
        return ( 
            <Fragment>
                <button {...this.state}>{this.props.text}</button>
            </Fragment>
         );
    }
}
 
export default Button;