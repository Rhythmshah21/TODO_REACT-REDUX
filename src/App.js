import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className='box'>
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
