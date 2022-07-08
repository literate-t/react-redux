import React from 'react';
import Counter from '../component/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

// container components란 리덕스에 있는 상태를 조회하거나
// 액션을 디스패치 할 수 있는 컴포넌트
function CounterContainer() {
  // useSelector는 state를 조회하는 훅
  // selector function의 state 파라미터가 redux의 현재 상태임
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());

  const onDecrease = () => dispatch(decrease());

  const onSetDiff = (diff) => dispatch(setDiff(diff));

  console.log(number);
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
