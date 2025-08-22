var num1 = 0, num2 = 1, temp, num3;
var sum = 0;
var n = 10;
for(var i = 0; i < n; i++) {
    num3 = num1 + num2;
    temp = num1;
    num1 = num2;
    num2 = num3;
    sum += temp;
}
console.log(`Sum of ${n} fibonacci numbers is: ${sum}`);