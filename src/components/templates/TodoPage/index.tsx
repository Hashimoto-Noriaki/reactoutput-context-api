import React from 'react';
import useTodo from '../../../hooks/useTodo';
import TodoForm from '../../organisms/TodoForm';
import TodoList from '../../organisms/TodoList';
import Input from '../../atoms/Input';
import styles from './style.module.css';

const TodoPage: React.FC = () => {
  const {
    search,
    filteredTodos,
    addTodo,
    deleteTodo,
    handleSearchChange,
  } =  useTodo();

  return (
    <div className={styles.todoPage}>
      <h1>Todoリスト</h1>
      <Input
        value={search}
        onChange={handleSearchChange}
        placeholder="検索"
      />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoPage;