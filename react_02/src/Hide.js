import React, { Component } from 'react';

class Hide extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      message: '안녕하시옵니가'
    };
  }

  // 버튼 클릭 시 호출되는 메소드 (빨강, 파랑)
  ClickHide = () => {
    this.setState({ message: ''});

  };

  ClickFeature = () => {
    this.setState({ message: '파란색 글씨'});
  };

  render() {
    return (
      <div>
        <button onClick={this.ClickHide}>사라져</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Hide;