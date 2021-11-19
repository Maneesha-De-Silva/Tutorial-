import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

import React from 'react'
import Task from './components/Task';

const  App = () => {
  const [tasks,settasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food ShoppingDoctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]
)

// detele task 
const deteleTask = (id) => {
 settasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className = 'container'>
    <Header/>
    <Tasks tasks={tasks} 
    onDelete= {deleteTask}/>
    </div>
  )
}
 export default App


/*
function App() {
 // const name ='Maneesha'
  //const y = false
  return (
    < div>
      <Header/>
    </div>
  );
}
export default App;

/*
class App extends React.Component{
  render(){
    return (
      <h1> hello react </h1>
    );
    
      
  }
}

*/