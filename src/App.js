import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { add, Button, URL, Input } from './components/re-export';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  // console.log(add(4, 5))
  // console.log(URL)
  return (
    <div className="App">
      Hello
      {/* <Button />
      <Input /> */}
      {/* <ComponentA />
      <ComponentB /> */}
      <ToDoList />
    </div>
  );
}

export default App;
