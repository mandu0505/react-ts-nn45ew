import * as React from 'react';
import '../style.css';

export default function Input() {
  const [moneyValue, setMoneyValue] = React.useState(0);
  const [timeValue, setTimeValue] = React.useState(0);
  const onChangeMoney = (e) => {
    setMoneyValue(Number(e.target.value));
  };
  const onChangeTime = (e) => {
    setTimeValue(Number(e.target.value));
  };
  const resetMoney = () => {
    setMoneyValue(0);
  };
  const resetTime = () => {
    setTimeValue(0);
  };
  const changeMoneyButton = (e) => {
    moneyValue + Number(e.target.value) < 400000
      ? setMoneyValue(moneyValue + Number(e.target.value))
      : setMoneyValue(400000);
  };
  const changeTimeButton = (e) => {
    timeValue + Number(e.target.value) < 18
      ? setTimeValue(timeValue + Number(e.target.value))
      : setTimeValue(18);
  };
  return (
    <div className="InputTab">
      <div className="InputBox">
        <div>매월불입금</div>
        <div>
          <input
            type="range"
            onChange={onChangeMoney}
            value={moneyValue}
            min="0"
            max="400000"
          />
          <button value="1000" onClick={changeMoneyButton}>
            1000
          </button>
          <button value="5000" onClick={changeMoneyButton}>
            5000
          </button>
          <button value="10000" onClick={changeMoneyButton}>
            10000
          </button>
          <button value="50000" onClick={changeMoneyButton}>
            50000
          </button>
          <button onClick={resetMoney}>초기화</button>
        </div>
        <div>
          <b>{moneyValue} 원</b>
        </div>
      </div>
      <div className="InputBox">
        <div>불입기간</div>
        <div>
          <input
            type="range"
            onChange={onChangeTime}
            value={timeValue}
            min="0"
            max="18"
          />
          <button value="6" onClick={changeTimeButton}>
            6개월
          </button>
          <button value="12" onClick={changeTimeButton}>
            12개월
          </button>
          <button onClick={resetTime}>초기화</button>
        </div>
        <div>
          <b>{timeValue} 개월</b>
        </div>
      </div>
    </div>
  );
}
