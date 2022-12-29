// import Card from "../UI/Card";
// import classes from "./AddUser.module.css";
// import Button from "../UI/Button";

// import React, { useState } from "react";

// const AddUser = (props) => {
//   const [enteredUsername, SetEnteredUsername] = useState("");
//   const [enteredAge, SetEnteredAge] = useState("");

//   const AddUserHandler = (event) => {
//     event.preventDefault();
//  if(enteredUsername.trim().length===0||enteredAge.trim().length===0||+enteredAge<1)
//  { return;
//  }

//    props.onAddUser(enteredUsername,enteredAge);
//     SetEnteredUsername("");
//     SetEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     SetEnteredUsername(event.target.value);
//   };
//   const ageChangeHandler = (event) => {
//     SetEnteredAge(event.target.value);
//   };

//   return (
//     <Card className={classes.input}>
//       <form onSubmit={AddUserHandler}>
//         <label htmlFor="username">Username</label>
//         <input
//           value={enteredUsername}
//           type="text"
//           id="username"
//           onChange={usernameChangeHandler}
//         ></input>
//         <label htmlFor="age">Age</label>
//         <input
//           value={enteredAge}
//           type="number"
//           id="Age"
//           onChange={ageChangeHandler}
//         ></input>
//         <Button type="submit">Add User</Button>
//       </form>
//     </Card>
//   );
// };

// export default AddUser;

import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
