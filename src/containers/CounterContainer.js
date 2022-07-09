import React from 'react';
import Counter from '../component/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch
//   );
// connect에서 자동으로 bind 해줌
const mapDispatchToProps = { increase, decrease, setDiff };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
