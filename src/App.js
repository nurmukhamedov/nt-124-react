import './App.css';
import Lesson50 from './components/Lesson-50/Lesson50';

function App() {
  const firstName = 'Muhammadrasul';
  const myArrayList = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="App">
      <Lesson50 name={firstName} arrayList={myArrayList} />
    </div>
  );
}

export default App;
