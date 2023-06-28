import * as React from 'react';
import '../style.css';
import { useRecoilState } from 'recoil';
import { priceAtom } from '../atom';

export default function Button() {
  const [price, setPrice] = useRecoilState(priceAtom);
  return (
    <div className="buttonTab">
      <h1 className="buttonText">계산하기</h1>
    </div>
  );
}
