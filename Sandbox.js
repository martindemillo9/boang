function greet() {
  console.log("hello there");
}
greet();

// const speak = function () {
//   console.log("good day!");
// };

// speak();

const speak = function (
  name = "Martin",
  time = "Afternoon",
  nickname = "Boss"
) {
  console.log(`Good ${time} ${nickname} ${name}`);
};

speak();
