import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import TodosList from './components/TodosList.jsx';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
  <div className="container">
    <div className="app-wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  </div>
  );
};



export default App;