import React from 'react';
import './BugBlock.css';
import {ReactComponent as Logo} from '../../logo.svg';
import {ReactComponent as Bug} from '../../bug.svg';

const BugBlock = () => {
    return (
      <React.Fragment key="2">
      <div className="block-I">
        <Logo />
        <Bug />
      </div>
      </React.Fragment>
    );
}

export default BugBlock;