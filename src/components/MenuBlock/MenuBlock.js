import React from 'react';
import './MenuBlock.css';

const MenuBlock = props => {
    return (
      <React.Fragment key="4">
      <div className="menu-block-cover">
        <div className="menu-block">
            <div className="menu">
              <div className="row">
                <button className="about-me" onClick={() => props.fnctn(props)}>Обо мне</button>
                <button className="projects" onClick={() => props.fnctn(props)}>Проекты</button>
              </div>
              <div className="row">
                <button className="writing" onClick={() => props.fnctn(props)}>Писанина</button>
                <button className="contacts" onClick={() => props.fnctn(props)}>Контакты</button>
              </div>
            </div>
        </div>
        <div className="scroll2menu"></div>
      </div>
      </React.Fragment>
    );
}

export default MenuBlock;