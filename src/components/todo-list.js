import React from 'react'; 
import TodoListItem from './todo-list-item'
const TodoList = () =>{
    const items = ['Drink coffee','Build Awesome App']
    return(
            <ul>
      <li><TodoListItem/></li>
      <li><TodoListItem/></li>
    </ul>
    )
}
export default TodoList;