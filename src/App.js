import logo from './logo.svg';
import './App.css';
// import DataFetcher from './UseEffectExample';
import FunctionalComponent from './typeofcomponent/FunctionalComponent';
import ClassComponent from './typeofcomponent/ClassComponent';
import TaskProject from './typeofcomponent/TaskProject';

function App() {
  return (
    <>
      {/* <FunctionalComponent description="Props Example" name="Dinagaran" salary="50000" /> */}
      <ClassComponent description="Props Example" channel="Data passing" />
      <FunctionalComponent/>
      <TaskProject/>
    </>
  );
}

export default App;