// const names = ["debby", "jiro", "tekevwe"];
// const shortName = names.filter((name) => {
//   return name.length <= 4;
// });

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// geoCode("lagos", (data) => {
//   console.log(data);
// });
const add = (a, b, callback) => {
  setTimeout(() => {
    const total = a + b;
    callback(total);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum);
});
