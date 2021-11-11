import React, { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/ListItem/List";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const [listOfPeople, setListOfPeople] = useState([
    { username: "Max", age: "31 years old" },
    { username: "Jimmy", age: "27 years old" },
  ]);

  // const [toggleModal, setToggleModal] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")


  const addPerson = (personDetail)=>{
    setListOfPeople(()=> [personDetail,...listOfPeople])
  }

  const handleErrorMessage = (error) =>{
    setErrorMessage(error)
  }

  const handleToggleError = () =>{
    setErrorMessage('')
  }


  return (
    <div className="container">
      <Form onAddPerson={addPerson} onSetError={handleErrorMessage}  />
      <List list={listOfPeople} />
      {errorMessage && <Modal error={errorMessage} onToggleError={handleToggleError}/>}

    </div>
    
    
  )
}

export default App;
