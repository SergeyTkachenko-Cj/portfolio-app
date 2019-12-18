import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './App.css';
import BugBlock from './components/BugBlock/BugBlock';
import MenuBlock from './components/MenuBlock/MenuBlock';
import ScrollJump from './components/ScrollJump/ScrollJump';
import ContactsBlock from './components/ContactsBlock/ContactsBlock';
import AboutMeBlock from './components/AboutMeBlock/AboutMeBlock';
import ProjectsBlock from './components/ProjectsBlock/ProjectsBlock';

export class App extends React.Component {

  componentDidMount() {
    this.setState({ blockList: this.blocks.filter((item, index) => index < 2)});
  }

  buttonHandler = (prps, eve) => {
        // A hack to avoid scroll jumping //
        window.scroll(0, window.pageYOffset - 1);
        window.scroll(0, window.pageYOffset + 1);
        ////////////////////////////////////

    let whichBlock = '';
    let whichText = '';

      if (prps.trgt === ".scroll-down") {
        this.blocks[this.blocks.length - 1] = this.lastBlock[eve.target.getAttribute('class')];
        whichBlock = this.blocks;
        whichText = eve.target.innerHTML;
      }
      else {
        const arr = [...this.blocks];
        arr[2] = arr[0];
        arr.shift();
        whichBlock = arr.reverse();
      }

    this.setState({ 
      blockList: whichBlock,
      fixedName:  whichText
    });
    setTimeout(() => this.scrollHandler(prps, whichBlock), 0);
  }

  scrollHandler = (prps, whichBlock) => {
    const stateChange = () => {
      this.setState({ blockList: whichBlock.filter((item, index) => index >= +prps.del)});
    }

    const callback = entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) stateChange();
      });
    }

    const target = document.querySelector(prps.trgt);
    const observer = new IntersectionObserver(callback);
    observer.observe(target);

        scroll.scrollToBottom(
          {
            duration: +prps.del === 3 ? 3000 : 1500,
            smooth: "easeInOutQuart", 
            delay: +prps.del === 3 ? 1000 : 0,
            ignoreCancelEvents: +prps.del === 3 || false
          }
        );
  }

  blocks = [
    <BugBlock />, 
    <MenuBlock del="3" trgt=".scroll-down" fnctn={this.buttonHandler} />, 
    <ScrollJump />, 
    <ContactsBlock del="1" trgt=".scroll2menu" fnctn={this.buttonHandler} />
  ]

  lastBlock = {
    contacts: <ContactsBlock del="1" trgt=".scroll2menu" fnctn={this.buttonHandler} />,
    aboutme: <AboutMeBlock del="1" trgt=".scroll2menu" fnctn={this.buttonHandler} />,
    projects: <ProjectsBlock del="1" trgt=".scroll2menu" fnctn={this.buttonHandler} />
  }

  state = {
    blockList: this.blocks,
    fixedName: ''
  }
  
  render() { 
      return (
        <div className="wrapper">
            {this.state.blockList.length > 2 ? <div className="fixed">{this.state.fixedName}</div> : null}
            {this.state.blockList.map((item, index) => React.cloneElement(item, { key: index }))}
        </div>
      );
  }
}

export default App;
