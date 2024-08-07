//object property short hand
const name = "george";
const age = 25;

const user = {
  name,
  age,
  location: "warri",
};
console.log(user);

//object destructring
const product = {
  label: "red notbook",
  price: 3,
  stock: 201,
  saleprice: undefined,
};

// const label = product.label;
// const stock = product.stock;

const { label: labelProduct, stock } = product;
console.log(labelProduct, stock);
