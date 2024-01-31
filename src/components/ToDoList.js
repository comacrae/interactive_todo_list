import React from "react";

function ListItem({ item, removeItem }) {
  return (
    <div className="list-item">
      <button onClick={() => removeItem(item.id)}>X</button>
      <p>{item.text}</p>
    </div>
  );
}

export default function ToDoList({ listItems, removeItem }) {
  return (
    <div className="list">
      {listItems.map((item) => {
        return <ListItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
}
