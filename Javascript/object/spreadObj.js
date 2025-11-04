const data = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const CopyData = {...data};

console.log(CopyData);
// Output: { name: 'Alice', age: 30, city: 'New York' }
const updatedData = {
  ...data,
  age: 31,
  country: "USA"
};

console.log(updatedData);
// Output: { name: 'Alice', age: 31, city: 'New York', country: 'USA' }