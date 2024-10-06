// import logo from './logo.svg';
import './App.css';
// let name="Mithlesh";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" About="About Us" />
    <div className="container my=8 ">
    <TextForm heading="Enter text to Analyse below"/>
    </div>
    </>
  );        
}

export default App;
