import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const updateUserName = (e) => {
    setUsername(e.target.value);
  };

  const updateUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const handleAddPerson =(e) =>{
    e.preventDefault()
    if(userAge < 0){
      props.onSetError(" Please enter a valid age (> 0) ")
    }
    else if(!username || !userAge){
      props.onSetError(" please enter a valid name and age (non-empty values) ")
    }
    else if(username && userAge){
      const newPerson = {username: username, age:userAge}
      props.onAddPerson(newPerson)
      setUserAge("")
      setUsername("")
    }
  }

  return (
    <form className="form-control" onSubmit={handleAddPerson}>
      <label className="form-control__label">Username</label>
      <input
        className="form-control__input"
        value={username}
        onChange={updateUserName}
      ></input>
      <label className="form-control__label">Age(years)</label>
      <input
        className="form-control__input"
        value={userAge}
        onChange={updateUserAge}
      ></input>
      <button>Add User</button>
    </form>
  );
};

export default Form;
