
import { useDispatch } from "react-redux";
import { addTodo } from "./action";
import { useState } from "react";
import TodoList from "./TodoList";


function App() {
  const dispatch = useDispatch();

  const [todoTitle,setTodoTitle] = useState("");


  const changeTitle=(e)=>{
    setTodoTitle(e.target.value);
  }

  const handleTodo=()=>{
    if(todoTitle.trim()){
      const newTodo = {
        title: todoTitle
      }
      dispatch(addTodo(newTodo))
      setTodoTitle("");
      
    }
  }

  return (
    <div className="App">
      <header className="container mt-5 w-50">
        <h1 className="text-primary text-center">Todo app using react redux</h1>
        <div className="input-group">
          <input type="text" value={todoTitle} className="form-control" onChange={changeTitle}/>
          <button className="btn btn-primary" onClick={handleTodo}>Add</button>
        </div>
        <TodoList/>
        
      </header>
    </div>
  );
}

export default App;
