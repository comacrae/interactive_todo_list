import React from "react";

function ListItem({ item, removeItem }) {
  return (
    <div className="list-item">
      <button className="list-item-button" onClick={() => removeItem(item.id)}>
        X
      </button>
      <p className="list-item-text">{item.text}</p>
      <p className="list-item-difficulty">{item.difficulty}</p>
      <p className="list-item-date">{item.date}</p>
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
