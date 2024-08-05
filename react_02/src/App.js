import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import Ex from './Ex';
import Black from './Black';
import Hide from './Hide';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />

      <ClassBind/>
      <hr />

      <Counter/>
      <hr />

      <Ex/>
      <hr />

      <Black/>
      <hr />

      <Hide/>
      <hr />

    </div>
  );
}

export default App;