import React from 'react'
import Task from './Task'


const Tasks = ({tasks,onDetele}) => {
    return (
        
        <div>
         {tasks.map((task) => (
         <Task key={task.id} task={task} 
         onDelete ={onDelete} />
         ))}   
        </div>
    )
}

export default Tasks
