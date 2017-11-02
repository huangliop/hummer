import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import {  Button } from 'antd-mobile';
/**
 * 点击发送短信验证码，并且进行倒计时
 */
class SendSMSCode extends Component {
    constructor(props) {
        super(props);
        this.state={msCodeCountdown:this.props.countDown+1,btnTxt:"发送验证码"}
    }
    
    /**
     * 组件将被卸载的生命周期
     */
    componentWillUnmount(){
        //关闭定时器
        clearInterval(this.injecterval);
    }
    render() {
        const cd=this.state.msCodeCountdown;
        const inputEnabled=cd<this.props.countDown&&cd>=0;
        const btnEnabled=(cd<0||cd>this.props.countDown);
        return (
            <div className={`${this.props.className} ${styles.inputItem}`}>
                <span>短信验证码</span>
                <input placeholder="短信验证码"  ref={this.props.inputRef} 
                disabled={!inputEnabled||this.props.disabled} maxLength={6}  />
                <Button size='small' inline className={styles.btnMsCode} 
                onClick={this.handleClick}
                disabled={!btnEnabled||this.props.disabled} >{this.state.btnTxt}</Button>
            </div>
        );
    }
    handleClick=(e)=>{
        this.props.sendRequest().then(success=>{
            if(success){
                this.setState({msCodeCountdown:60,btnTxt:`再次发送(${this.props.countDown})`});
                this.injecterval= setInterval(()=>{
                           let countdown=--this.state.msCodeCountdown;
                           let txt=`再次发送(${countdown})`;
                           if(countdown<1){
                               clearInterval(this.injecterval);
                               countdown=this.props.countDown+1;
                               txt="再次发送";
                           }
                           this.setState({msCodeCountdown:countdown,btnTxt:txt});
                       },1000);
            }
        });
        
    }
}

SendSMSCode.propTypes = {
    /**
     * 让外部组件拿到input 的DOM节点
     */
    inputRef:PropTypes.func.isRequired,
    /**
     * 请求验证码的接口
     */
    sendRequest:PropTypes.func.isRequired,
    /**
     * 验证码重新发生时间
     */
    countDown:PropTypes.number.isRequired,
    /**
     * 是否不可用
     */
    disabled:PropTypes.bool,
    /**
     * 样式
     */
    className:PropTypes.string
};

export default SendSMSCode;