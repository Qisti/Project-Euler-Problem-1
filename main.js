var i;
var temp1 = 0;
for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    temp1 = temp1 + i;
  }
}
console.log(temp1);
