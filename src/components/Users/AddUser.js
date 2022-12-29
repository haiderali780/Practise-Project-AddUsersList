import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDEfault();
  };
  return (
    <Card className={classes.input  }>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age</label>
        <input type="number" id="Age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
