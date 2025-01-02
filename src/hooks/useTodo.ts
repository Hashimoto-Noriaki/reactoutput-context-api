import { useState } from 'react';

export type Todo = {
  id: number;
  title: string;
};

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState('');

  // Todoを追加する関数
  const addTodo = (title: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: prevTodos.length + 1, title },
    ]);
  };

  // Todoを削除する関数
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 検索の入力を処理する関数
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 検索結果に基づいてTodoをフィルタリング
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return {
    todos,
    search,
    filteredTodos,
    addTodo,
    deleteTodo,
    handleSearchChange,
  };
};

export default useTodo;