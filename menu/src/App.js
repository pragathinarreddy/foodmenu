import logo from './logo.svg';
import './App.css';
import All from './component/All';
import Breakfast from './component/Breakfast';
import Lunch from './component/Lunch';
import Shakes from './component/Shakes';
import { useState } from 'react';

function App() {
  const [all, setAll] = useState(false)
  const [breakfast, setBreakfast] = useState(false)
  const [lunch, setLunch] = useState(false)
  const [shakes, setShakes] = useState(false)
  
const handleAll = () => {
  setAll(true)
  setBreakfast(false)
  setLunch(false)
  setShakes(false)
}

const handleBreakfast = () => {
  setBreakfast(true)
  setLunch(false)
  setShakes(false)
  setAll(false)
}

const handleLunch = () => {
  setLunch(true)
  setShakes(false)
  setAll(false)
  setBreakfast(false)

}

const handleShakes = () => {
  setShakes(true)
  setAll(false)
  setBreakfast(false)
  setLunch(false)
}


  return (
    <>
    <div className='btn'>
    <button className = {all === true ? "active_btn" : ""} onClick={handleAll}>All</button>
    <button className = {breakfast === true ? "active_btn" : ""} onClick={handleBreakfast}>Breakfast</button>
    <button className = {lunch === true ? "active_btn" : ""} onClick={handleLunch}>Lunch</button>
    <button className = {shakes === true ? "active_btn" : ""} onClick={handleShakes}>Shakes</button>

    </div>
    <hr className='dash' />


    <div>
      {
        all === true ? <All/> : breakfast === true ? <Breakfast/> : lunch === true ? <Lunch/> : shakes === true ? <Shakes/> : <All/>
      }
    </div>
   






    </>
  );
}

export default App;
