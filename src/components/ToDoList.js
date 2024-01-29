import React from "react";

function ListItem({ item, removeItem }) {
  return (
    <li className="list-item">
      <button onClick={() => removeItem(item.id)}>X</button>
      <p>{item.text}</p>
    </li>
  );
}

export default function ToDoList({ listItems, removeItem }) {
  return (
    <ul>
      {listItems.map((item) => {
        return <ListItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </ul>
  );
}
