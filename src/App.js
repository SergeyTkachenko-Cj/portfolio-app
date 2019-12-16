import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './App.css';
import BugBlock from './components/BugBlock/BugBlock';
import MenuBlock from './components/MenuBlock/MenuBlock';
import ScrollJump from './components/ScrollJump/ScrollJump';
import ContactsBlock from './components/ContactsBlock/ContactsBlock';

export class App extends React.Component {

  componentDidMount() {
    this.setState({ blockList: this.blocks.filter((item, index) => index < 2)});
  }

  buttonHandler = prps => {
    let whichBlock = '';
      if (prps.trgt === ".scroll2contacts") {
        whichBlock = this.blocks;
      }
      else {
        const arr = [...this.blocks];
        arr[2] = arr[0];
        arr.shift();
        whichBlock = arr.reverse();
      }
    this.setState({ blockList: whichBlock })
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

        scroll.scrollToBottom()
  }

  blocks = [
    <BugBlock />, 
    <MenuBlock del="3" trgt=".scroll2contacts" fnctn={this.buttonHandler} />, 
    <ScrollJump />, 
    <ContactsBlock del="1" trgt=".scroll2menu" fnctn={this.buttonHandler} />
  ]

  state = {
    blockList: this.blocks
  }
  
  render() { 
      return (
        <div className="wrapper">
            {this.state.blockList.map((item, index) => React.cloneElement(item, { key: index }))}
        </div>
      );
  }
}

export default App;
