<<<<<<< HEAD
import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       { todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })}
     </ul><hr/>
   </>
 );
}
export default TodoList;
=======
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

export default function TodoList() {
  return(
    <>
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo, index) => {
          return(<TodoItem key={index} todo={todo}/>);
        })}
      </ListGroup>
      <hr/>
    </>
  );
}
>>>>>>> 35421d4 (Fix: ignore ESLint during build)
