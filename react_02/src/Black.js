import React, { Component } from 'react';

class Black extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      message: '검정색 글씨',
      color : 'black'
    };
  }

  // 버튼 클릭 시 호출되는 메소드 (빨강, 파랑)
  ClickRed = () => {
    this.setState({ message: '빨간색 글씨' , color : 'red'});

  };

  ClickBlue = () => {
    this.setState({ message: '파란색 글씨' , color : 'blue' });
  };

  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>{this.state.message}</h1>
        <button onClick={this.ClickRed}>뻘건색</button>
        <button onClick={this.ClickBlue}>퍼런색</button>
      </div>
    );
  }
}

export default Black;