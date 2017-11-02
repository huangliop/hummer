
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './index.css';
/**
 * 带导航功能的按钮
 * 由Link改造而来,参数与Link一致
 */
class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state={active:false};
    }
    
    render() {
        const act=this.state.active?styles.active:"";
        return (
            <Link to={this.props.to} replace={this.props.replace}  style={this.props.style}
            className={styles.button+' '+act} onTouchStart={this.handleStart} onTouchEnd={this.handleEnd}>
                <span>{this.props.children}</span>
            </Link>
        );
    }
    handleStart=(e)=>{
        this.setState({active:true})
    }
    handleEnd=(e)=>{
        this.setState({active:false});
    }
}

NavButton.propTypes = {
    to:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    replace:PropTypes.bool,
    //自定义样式
    style:PropTypes.object
};

export default NavButton;