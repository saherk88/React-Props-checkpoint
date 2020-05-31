import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import person1 from "./person1.jpg"
import person2 from "./person2.jpg"

function App() {

  const  handelName = (name) => {
    alert(name);
  }

  return (
    <div className="App">
      <div className = "profiles" >
        <Profile fullname = "Ali Ismail" bio = "hard wroker" profession ="Electrician" handelName={handelName}>
             <img src = {person1} alt = "pic1" style = {{ width : '200px' }}/> </Profile>
      </div>
      <div className = "profiles">
        <Profile fullname = "Mohamed Ibrahim" bio = "smart and funny" profession= "doctor" handelName={handelName} >
            <img src = {person2} alt = "pic1" style = {{ width : '200px' }} /> </Profile>
      </div>
    </div>
  );
}

export default App;
