import React, { PureComponent, Fragment } from 'react';

class Button extends PureComponent {
    constructor(props){
        super(props);
        this.state={};
        let {variant, disabled, size, className} = props;
    }
    render() { 
        return ( 
            <Fragment>
                <div className="button">{this.props.children}</div>
            </Fragment>
         );
    }
}
 
export default Button;