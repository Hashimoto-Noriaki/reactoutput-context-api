import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import TodoPage from './components/templates/TodoPage';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
};

export default App;