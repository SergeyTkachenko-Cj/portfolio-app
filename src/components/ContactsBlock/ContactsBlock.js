import React from 'react';
import './ContactsBlock.css';
import MyFace from '../../images/IMG_0322.png';

const ContactsBlock = props => {
    return (
      <div className="contacts-block">
        <div className="links">
            <a>ГИТХАБ</a>
            <a>ЛИНКДИН</a>
            <a>ФЕЙСБУК</a>
        </div>
        <img src={MyFace} className="photo"></img>
        <button onClick={() => props.fnctn(props)}>&darr;</button>
        <div className="scroll-down"></div>
        </div>
    );
}

export default ContactsBlock;