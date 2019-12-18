import React from 'react';
import './MenuBlock.css';

const MenuBlock = props => {
    return (
      <div className="menu-block-cover">
        <div className="menu-block">
            <div className="menu">
              <div className="row">
                <button className="aboutme" onClick={eve => props.fnctn(props, eve)}>Обо мне</button>
                <button className="projects" onClick={eve => props.fnctn(props, eve)}>Проекты</button>
              </div>
              <div className="row">
                <button className="writing"  onClick={eve => props.fnctn(props, eve)}>Писанина</button>
                <button className="contacts" onClick={eve => props.fnctn(props, eve)}>Контакты</button>
              </div>
            </div>
        </div>
        <div className="scroll2menu"></div>
      </div>
    );
}

export default MenuBlock;