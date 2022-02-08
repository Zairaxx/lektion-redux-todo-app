import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Redux - Todo app 1.0
        </h1>
        <Header/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
