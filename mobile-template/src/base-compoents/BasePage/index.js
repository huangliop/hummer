import React, { Component } from 'react';
import styles from './index.css';
import PropTypes from 'prop-types';
import Header from '../Header';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router';

/**
 * 基础页面，所有二级页面都应该用这个页面包裹
 */
class BasePage extends Component {
    constructor(props) {
        super(props); 
        this.state={
            //进入时播放动画
            in:true
        } 
    }
    
    render() {
        let header = this.props.hasHeader ? <Header onLeftClick={this.handleLeftClick} title={this.props.title}
        rightContent={this.props.headerRightContent}/>: "";
        return (
            <CSSTransition
                appear={true}
                in={this.state.in}
                timeout={300} 
                classNames='fade'>
                <div className={styles.basePage}>
                    {header}
                    {this.props.children}
                </div>
            </CSSTransition>
        );
    }  
    componentWillUnmount(){ 
    }
    handleLeftClick=(e)=>{ 
        switch (typeof e) {
            case 'object'://正常的点击返回按钮
                if(this.props.hookBack){
                    this.props.hookBack(this.handleLeftClick);
                }else{
                    this.startBack();
                }
                break;
            case 'boolen'://在hookBack方法中调用了该方法
                if(e===true){
                    this.startBack();
                }
                break;
            default:
                this.startBack();
                break;
        } 
    } 
    startBack(){
        this.setState({in:false});
        setTimeout(this.props.history.goBack, 300);
    }
}
BasePage.defaultProps = {
    hasHeader: true
}
BasePage.propTypes = {
    /**
     * 是否显示顶部栏，默认true
     */
    hasHeader: PropTypes.bool,
    /**
     * 在顶部栏中显示的标题
     */
    title: PropTypes.string,
    /**
     * 右边的内容
     */
    headerRightContent:PropTypes.node,
    /**
     * 点击返回按钮的钩子方法，主要用于退出前确认
     * 用法举例 
     * hookBack=(continueBack){
     *  if(true){
                continueBack(false);
            }else{
                continueBack(true);
            } 
        }
     */
    hookBack:PropTypes.func
};
BasePage=withRouter(BasePage);
export default BasePage;