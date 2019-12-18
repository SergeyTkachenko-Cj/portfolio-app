import React from 'react';
import './BugBlock.css';
import {ReactComponent as Logo} from '../../logo.svg';
import {ReactComponent as Bug} from '../../bug.svg';

const BugBlock = () => {
    return (
      <div className="block-I">
        <Logo />
        <Bug />
      </div>
    )
}

export default BugBlock;