let numberArray = [2, 82, 19, 0, 42, 53, 0, 46, 17, 0, 56];
var evenCount = 0, oddCount =0, zeroCount = 0;
 for(var i = 0; i < numberArray.length; i++) {
    if(numberArray[i] == 0) {
        zeroCount++;
    }
    else if(numberArray[i] % 2 == 0) {
        evenCount++;
    }
    else {
        oddCount++;
    }
 }

 console.log(`Count of zeroes: ${zeroCount}`);
 console.log(`Count of Even numbers: ${evenCount}`);
 console.log(`Count of Odd Numbers: ${oddCount}`);
