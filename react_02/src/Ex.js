import React, { Component } from 'react';

class Ex extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      message: 'Hello World!'
    };
  }

  // 버튼 클릭 시 호출되는 메소드
  handleClick = () => {
    this.setState({ message: 'Goodbye World!' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Change Message</button>
      </div>
    );
  }
}

export default Ex;