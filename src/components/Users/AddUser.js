import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import React, { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, SetEnteredUsername] = useState("");
  const [enteredAge, SetEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
 if(enteredUsername.trim().length===0||enteredAge.trim().length===0||+enteredAge<1)
 { return;
 }
 

    console.log(enteredUsername, enteredAge);
    SetEnteredUsername("");
    SetEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    SetEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    SetEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          type="text"
          id="username"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          type="number"
          id="Age"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
