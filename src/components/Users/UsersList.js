import Styles from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card className={Styles.users}>
    <ul>

      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} Years Old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
