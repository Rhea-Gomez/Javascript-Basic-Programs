var num = 4;
var flag = true;
if (num == 1) {
    flag = false;
} else {
    for (var i = 2; i <= num /2; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
}
if (flag == true) {
    console.log("Prime number");
} else {
    console.log("Not prime number");
}  
