// import React, { useState } from "react";
// import AddUser from "./components/Users/AddUser";
// import UsersList from "./components/Users/UsersList";

// function App() {
//   const [userList, SetUserList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     SetUserList((prevState) =>{ return [
//       ...prevState,
//       { name: uName, age: uAge, id: Math.random().toString() },
//     ]});
//   };
//   return (
//     <div>
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={[userList]} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;