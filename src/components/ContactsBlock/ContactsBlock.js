import React from 'react';
import './ContactsBlock.css';
import MyFace from '../../images/IMG_0322.png';

const ContactsBlock = props => {
    return (
      <React.Fragment key="1"> 
      <div className="contacts-block">
        <div className="links">
            <a>ГИТХАБ</a>
            <a>ЛИНКДИН</a>
            <a onClick={() => props.fnctn(props)}>ФЕЙСБУК</a>
        </div>
        <img src={MyFace} className="photo"></img>
        <div className="scroll2contacts"></div>
        </div>
      </React.Fragment>
    );
}

export default ContactsBlock;