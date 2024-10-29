import './App.css';
import Counter from './components/Counter';
import CountTimer from './components/countTimer';
import Todo from './components/TodoList';
import Votecount from './components/votecount';

function App() {
  return (
    <div >
      <Counter/>
      <Todo/>
      <Votecount/>
      <CountTimer/>
    </div>
  );
}

export default App;
