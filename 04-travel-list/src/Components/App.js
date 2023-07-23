import { useState } from "react";
import "../index.css";
import Logo from "./logo.js";
import Form from "./form.js";
import Packinglist from "./packingList.js";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleListClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packinglist
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        handleListClear={handleListClear}
      />
      <Stats items={items} />
    </div>
  );
}
