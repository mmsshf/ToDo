import React from "react";
import Todoo from "./Todoo";
const Todo = ({todos, setTodos, filteredTodos}) => {
return ( 

<div className="todo-container">
      <ul className="todo-list">
    {filteredTodos.map((todo) => (

      <Todoo 
  todo={todo}    
  setTodos={setTodos}
  todos={todos}
  key={todo.id} 
  text={todo.text} />
    ))

    }



      </ul>

      
    </div>



);


};
export default Todo;