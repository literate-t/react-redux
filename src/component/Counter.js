import React from 'react';

// presentational component
// props를 받아와 렌더링 함
// UI 선언에 집중
// 상태관리는 컨테이너 컴포넌트에서 이루어짐
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    const { value } = e.target;

    onSetDiff(parseInt(value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <input type="number" value={diff} onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
