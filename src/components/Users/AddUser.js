import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [usernameHandler, setUsernameHandler] = useState("");
  const [ageHandler, setAgeHandler] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if(usernameHandler.trim().length === 0 || ageHandler.trim().length === 0)
    {      setError({
       title: 'Invalid input',
       message : 'Please put a valid username and age(non empty values!)'
    })
            return;
    }
    if(+ageHandler < 1)
    {  setError({
      title: 'Invalid age',
      message : 'Please put a valid age (>0)'
   })
       return;
    }
    props.onAddUser(usernameHandler, ageHandler);
    setUsernameHandler("");
    setAgeHandler("");
  };
  const usernameChangeHandler = (event) => {
    setUsernameHandler(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeHandler(event.target.value);
  };
  const errorHandler = () =>
  {
     setError(null);
  }
  return (
     <div>
     { error && <ErrorModal title={error.title} 
     message={error.message}
     onConfirm={errorHandler}   
     /> }
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          value={usernameHandler}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">AGE</label>
        <input type="number" 
        id="age" 
        value={ageHandler}
        onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
