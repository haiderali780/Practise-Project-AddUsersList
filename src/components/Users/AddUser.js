const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDEfault();
  };
  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>
      <label htmlFor="age">Age</label>
      <input type="number" id="Age"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
