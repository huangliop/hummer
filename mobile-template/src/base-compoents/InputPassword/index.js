import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
/**
 * 密码输入组件
 * 可以被其他应用复用，所以放在Base-Compoents下
 */
class InputPassword extends Component {
    constructor(props) {
        super(props);  
        this.state={showClose:false,pwd:''};
    }
    render() {
        const placeholder=this.props.placeholder?this.props.placeholder:"密码"
        return (
            <div className={`${this.props.className} ${styles.inputItem}`}>
                <span>密码</span>
                <input placeholder={placeholder} value={this.state.pwd} type='password'  ref={this.props.inputRef} maxLength={16} onChange={this.handleChange}  />
                {this.state.showClose&&<div onClick={this.handleClick}/>}
            </div>
        );
    }
    handleChange=(e)=>{
        if(e.target.value){
            this.setState({showClose:true,pwd:e.target.value});
        }else{
            this.setState({showClose:false,pwd:''});
        } 
    }
    handleClick=(e)=>{
        this.setState({showClose:false,pwd:''});
    }
}

InputPassword.propTypes = {
    /**
     * 让外部组件拿到input 的DOM节点
     */
    inputRef:PropTypes.func,
    /**
     * placeholder,默认“密码”
     */
    placeholder:PropTypes.string,
    /**
     * 样式
     */
    className:PropTypes.string
};

export default InputPassword;