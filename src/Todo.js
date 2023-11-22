import React, { useState } from "react";
import "./index.css"
import { deleteTodo, editTodo } from "./action";
import { useDispatch } from "react-redux";

function Todo(props) {
  const { title, id } = props;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();


  const onClickEdit= () => {
    setEditing(true)
  }

  const onChangeTitle= (e) => {
        setNewTitle(e.target.value)
  }

  const onClickTodo = () =>{
    if(newTitle.trim){
        dispatch(editTodo({id:id,title:newTitle}))
        setEditing(false)
    }
  }

  const onClickDelete= () => {
    dispatch(deleteTodo(id))
    
  }

  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input className="form-control" 
          value={newTitle} 
          onChange={onChangeTitle} 
          type="text" />
          <button className="btn btn-secondary" onClick={onClickTodo}>Save</button>
        </div>
        
      ) : (
        <li className="list-group-item">
          <p>{title}</p>
          <div className="actions">
            <button className="btn btn-danger" onClick={onClickEdit}>Edit</button>
            <button className="btn btn-warning" onClick={onClickDelete}>Delete</button>
          </div>
        </li>
      )}
    </div>
  );
}


export default Todo;
