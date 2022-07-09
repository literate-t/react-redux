import React from 'react';
import Counter from '../component/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

// container components란 리덕스에 있는 상태를 조회하거나
// 액션을 디스패치 할 수 있는 컴포넌트
function CounterContainer() {
  // useSelector는 state를 조회하는 훅
  // selector function의 state 파라미터가 redux의 현재 상태임
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
    // 객체를 만들면 최적화 함수를 넣어줘야 함
    // 새로운 객체를 만드므로 상태 비교를 할 수 없어 무조건 리렌더링이 됨
    // (left, right) => left.number === right.number && left.diff === right.diff
  );
  // 다음처럼 하면 re-render 안 일어남
  // 값으로 받아올 때는 알아서 최적화를 함
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

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

export default React.memo(CounterContainer);
