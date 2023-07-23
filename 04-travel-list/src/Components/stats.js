export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );

  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go ✈️"
          : `💼 You have ${numOfItems} items on your list, and you already packed
          ${numOfPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
