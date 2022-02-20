import './App.css';
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
// import './components/Left.js';
function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-primary py-2">
        <h6 className='text-center text-light'>Lorem ispum sample dummy text of the printing</h6>
      </div>
      <div className="row">
        <Left />
        <Center />
        <Right />
      </div>
    </div>

  );
}

export default App;
