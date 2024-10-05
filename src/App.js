// import logo from './logo.svg';
import './App.css';
// let name="Mithlesh";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my=3 ">
    <TextForm heading="Enter text to Analyse"/>
    </div>
    </>
  );        
}

export default App;
