import * as React from 'react';
import '../style.css';
import { useRecoilState } from 'recoil';
import { priceAtom, timeAtom } from '../atom';

export default function Input() {
  const [price, setPrice] = useRecoilState(priceAtom);
  const [time, setTime] = useRecoilState(timeAtom);

  const onChangeMoney = (e) => {
    setPrice(Number(e.target.value));
  };
  const onChangeTime = (e) => {
    setTime(Number(e.target.value));
  };
  const resetMoney = () => {
    setPrice(0);
  };
  const resetTime = () => {
    setTime(0);
  };
  const changeMoneyButton = (e) => {
    price + Number(e.target.value) < 400000
      ? setPrice(price + Number(e.target.value))
      : setPrice(400000);
  };
  const changeTimeButton = (e) => {
    time + Number(e.target.value) < 18
      ? setTime(time + Number(e.target.value))
      : setTime(18);
  };
  return (
    <div className="InputTab">
      <div className="InputBox">
        <div>매월불입금</div>
        <div>
          <input
            type="range"
            onChange={onChangeMoney}
            value={price}
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
          <b>{price} 원</b>
        </div>
      </div>
      <div className="InputBox">
        <div>불입기간</div>
        <div>
          <input
            type="range"
            onChange={onChangeTime}
            value={time}
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
          <b>{time} 개월</b>
        </div>
      </div>
    </div>
  );
}
