// import Styles from "./UsersList.module.css";
// import Card from "../UI/Card";
// const UsersList = (props) => {
//   return (
//     <Card className={Styles.users}>
//     <ul>

//       {props.users.map((user) => (
//         <li key={user.id}>
//           {user.name} ({user.age} Years Old)
//         </li>
//       ))}
//     </ul>
//     </Card>
//   );
// };

// export default UsersList;

import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
