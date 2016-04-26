import React from 'react';
import $ from 'jquery';

export default class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  getNumber(growth) {
    let num = 0;
    let eleNum = $('.J_Data_Num');

    if (isNaN(growth)) {
      return;
    }
    growth = parseInt(growth, 10);
    // 每次增加的幅度
    let times = growth / 36;

    // 从0开始增长
    let initial =  0;
    let numF = initial;

    let numInterval = setInterval(function() {
      numF += times;
      num = parseInt(numF);
      if (num >= growth + initial) {
        eleNum.text(growth + initial);
        clearInterval(numInterval);
        return;
      }
      eleNum.text(num);
    }, 60);
  }
  render() {
    return (
      <div className="J_Data_Num">{this.getNumber(this.props.num)}</div>
    );
  }
}
