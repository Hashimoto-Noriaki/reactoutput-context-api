import React, { createContext, useState, ReactNode } from 'react';

export type Todo = {
  id: number;
  title: string;
};

export type TodoContextType = {
  todos: Todo[];
  search: string;
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  handleSearchChange: (value: string) => void;
  filteredTodos: Todo[];
};

const TodoContext = createContext({});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState('');

  const addTodo = (title: string) => {
    if (title.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: prevTodos.length + 1, title },
      ]);
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const filteredTodos = todos.filter(todo => todo.title.startsWith(search));

  return (
    <TodoContext.Provider
      value={{
        todos,
        search,
        addTodo,
        deleteTodo,
        handleSearchChange,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
