import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Banner from "./components/Banner";

export default function App() {
  const [listItems, setListItems] = useState(Array());

  function removeListItem(itemId) {
    const newItems = listItems.filter((item) => item.id != itemId);
    setListItems(newItems);
  }

  function uniqueId() {
    return "id" + new Date().getTime();
  }
  function addListItem(text, difficulty, date) {
    const newList = [
      ...listItems,
      { text: text, date: date, difficulty: difficulty, id: uniqueId() },
    ];
    setListItems(newList);
  }
  return (
    <>
      <Banner></Banner>
      <div className="app-container">
        <div className="list-container">
          <ToDoForm onSubmit={addListItem} className="submit-form" />
          <ToDoList listItems={listItems} removeItem={removeListItem} />
        </div>
      </div>
    </>
  );
}
