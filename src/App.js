import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [listItems, setListItems] = useState(Array());

  function removeListItem(itemId) {
    const newItems = listItems.filter((item) => item.id != itemId);
    setListItems(newItems);
  }

  function uniqueId() {
    return "id" + new Date().getTime();
  }
  function addListItem(text) {
    const newList = [...listItems, { text: text, id: uniqueId() }];
    setListItems(newList);
  }
  return (
    <div className="app-container">
      <div className="list">
        <ToDoForm onSubmit={addListItem} className="submit-form" />
        <ToDoList listItems={listItems} removeItem={removeListItem} />
      </div>
    </div>
  );
}
