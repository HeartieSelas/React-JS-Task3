// import React, {useState} from 'react'

// export const TodoForm = ({addTodo}) => {
//     const [value, setValue] = useState("")

//     const handleSubmit = e => {
//         e.PreventDefault();

//         addTodo(value)

//         setValue("")
//     }


//   return (
//     <form className='TodoForm' onSubmit={handleSubmit}>
//         <input type="text" className='todo-input' value={value} placeholder='What is the Task today?' onChange={(e) => setValue(e.target.value)} />
//         <button type='submit' className='todo-btn'>Add Task</button>
//     </form>
//   )
// }


import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}