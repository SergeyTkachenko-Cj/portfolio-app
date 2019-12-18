import React from 'react';
import './ProjectsBlock.css';

const ProjectsBlock = props => {
    return (
      <div className="projects-block-cover">
        <div className="project-block">
            <div>
                <div className="h-logo">
                  <h1>МЭНЕРГОНАЛАДКА</h1>
                  <div className="logo-naladka"></div>
                </div>
                <div className="projects-text">Сайт на GraphQL с применением 3D моделирования и Wordpress как CMS системой</div>
                <button className="to-site">На сайт</button>
            </div>
        </div>
        <div className="project-block argus">
            <div>
                <div className="h-logo">
                  <h1>ARGUS.GROUP</h1>
                  <div className="logo-argus"></div>
                </div>
                <div className="projects-text">Сайт на React.js с применением технологии Rest API и "свадьбы" фреймворка с Wordpress</div>
                <button className="to-site">На сайт</button>
            </div>
        </div>
        <button onClick={() => props.fnctn(props)}>&darr;</button>
        <div className="scroll-down"></div>
      </div>
    );
}

export default ProjectsBlock;