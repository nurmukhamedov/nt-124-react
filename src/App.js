import Routing from './Router/Routing';
import './App.css';
import ExampleClass from './Lesson-54/components/ExampleClass';
import { useContext } from 'react';
import { MyContext } from './Lesson-54/components/ExampleContext';
import Home from './Lesson-54/components/Home';
import Countires from './Lesson-54/components/Countires';
function App() {

  const { count } = useContext(MyContext)


  return (
    <div className="App">
      {/* <Routing /> */}
      {/* <ExampleClass /> */}
      <Home />
      <Countires />
      <h2>{count}</h2>
    </div>
  );
}

export default App;
