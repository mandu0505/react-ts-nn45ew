import * as React from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { priceAtom, timeAtom } from '../atom';
import '../style.css';

export default function Button() {
  const price = useRecoilValue(priceAtom);
  const time = useRecoilValue(timeAtom);
  const [calculatedPrice, setCaculatedPrice] = useState(0);
  const [bankPrice, setBankPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const calculatePrice = () => {
    setCaculatedPrice(price * 0.75 * time);
    setBankPrice(price * 0.05 * time);
    setFinalPrice(price * 0.75 * time + price * 0.05 * time);
  };
  return (
    <div className="buttonTab">
      <h1 className="buttonText" onClick={calculatePrice}>
        계산하기
      </h1>
      <h1>
        국가지원금(66%): {calculatedPrice}원 + 은행이자(5%):{' '}
        {Math.floor(bankPrice)}원 = 총합: {Math.floor(finalPrice)}원
      </h1>
    </div>
  );
}
