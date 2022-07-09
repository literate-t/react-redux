import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../component/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback((text) => addTodo(text));
  const onToggle = useCallback((id) => toggleTodo(id));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
