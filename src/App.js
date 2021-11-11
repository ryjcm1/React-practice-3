import React, { useState } from "react";
import Form from "./components/Form/Form";
import ListItem from "./components/ListItem/ListItem";
import "./App.css";

function App() {
  const [listOfPeople, setListOfPeople] = useState([
    { username: "Max", age: "31 years old" },
    { username: "Jimmy", age: "27 years old" },
  ]);

  const addPerson = (personDetail)=>{
    setListOfPeople(()=> [personDetail,...listOfPeople])
  }

  return (
    <div className="container">
      <Form onAddPerson={addPerson} />
      <ul>
        {listOfPeople.map(people => (
          <ListItem username={people.username} userAge={people.age}/>
        ))}
      </ul>
      
    </div>
    
    
  )
}

export default App;
