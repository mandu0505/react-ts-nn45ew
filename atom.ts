import { atom } from 'recoil';

export const priceAtom = atom({
  key: 'price',
  default: 0,
});

export const timeAtom = atom({
  key: 'time',
  default: 0,
});
