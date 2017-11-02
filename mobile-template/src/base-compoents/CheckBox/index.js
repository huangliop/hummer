import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

class CheckBox extends Component {
    render() {
        return (
            <div className={styles.cb}>
                <input type="checkbox" value="0"  id="checkbox" style={{display:'none'}} 
                onChange={this.props.onChange} ref={this.props.inputRef}/>
                <label htmlFor="checkbox"></label> 
            </div>
        );
    }  
}

CheckBox.propTypes = {
    onChange:PropTypes.func,
    inputRef:PropTypes.func,
};

export default CheckBox;