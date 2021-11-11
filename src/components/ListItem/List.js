import "./List.css";
import ListItem from "./ListItem";

const List = (prop) => {
  return (
    <ul className="list">
      {prop.list.map((people) => (
        <ListItem username={people.username} userAge={people.age} />
      ))}
    </ul>
  );
};

export default List;
