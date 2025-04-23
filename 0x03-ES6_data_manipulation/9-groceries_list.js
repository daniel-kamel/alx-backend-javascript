export default function groceriesList() {
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const groceryList = Object.entries(groceries).map(([item, quantity]) => ({
    item,
    quantity,
  }));

  return groceryList;
}
