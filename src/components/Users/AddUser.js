import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser= (props) => {
   const [usernameHandler, setUsernameHandler] = useState('');
   const [ageHandler, setAgeHandler] = useState('');


    const AddUserHandler = (event) => 
    {
        event.preventDefault();
        console.log(usernameHandler , ageHandler);
    }
    const usernameChangeHandler = (event) =>
    {
       setUsernameHandler(event.target.value);
    }
    const ageChangeHandler = (event) =>
    {
       setAgeHandler(event.target.value);
    }
    return (
        <Card className={classes.input}>
     <form onSubmit={AddUserHandler}>
     <label htmlFor="username">USERNAME</label>
     <input type="text" id="username" onChange={usernameChangeHandler}></input>
     <label htmlFor="age">AGE</label>
     <input type="number" id="age" onChange={ageChangeHandler}></input>
     <Button type="submit">Add User</Button>
 </form>
 </Card>
    )
};

export default AddUser;