import React from 'react';

class ScrollLink extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(this.props.target);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <a href={`#${this.props.target}`} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

export default ScrollLink;