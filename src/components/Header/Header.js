import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                Hello World!
            </div>
        )
    }
}

export default Header;