
/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

class AutocompleteWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseIn: false,
    };

    this.cannotClose = this.cannotClose.bind(this);
    this.canClose = this.canClose.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick, false);
  }

  onClick() {
    const { mouseIn } = this.state;
    const { onClickOutside } = this.props;
    if (!mouseIn) {
      onClickOutside();
    }
  }

  cannotClose() {
    this.setState({
      mouseIn: true,
    });
  }

  canClose() {
    this.setState({
      mouseIn: false,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper
        onMouseEnter={this.cannotClose}
        onMouseLeave={this.canClose}
      >
        {children}
      </Wrapper>
    );
  }
}

AutocompleteWrapper.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AutocompleteWrapper;
