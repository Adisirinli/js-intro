
// tapsiriq 1 start
function countOddNumbers(n, m) {
    let count = 0;
    for (let i = n; i <= m; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
    return count;
  }
  
  let n = 3;
  let m = 10;
  console.log(countOddNumbers(n, m)); 
  // tapsiriq 1 end

  //tapsiriq 2 start
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let number = 17;
  if (isPrime(number)) {
    console.log(`${number} sadə ədəddir.`);
  } else {
    console.log(`${number} mürəkkəb ədəddir.`);
  }
  //tapsiriq 2 end




  //tapsiriq 3 start
  function isPowerOfTwo(n) {
    return (n !== 0) && ((n & (n - 1)) === 0);
  }
  
  let num = 8;
  if (isPowerOfTwo(num)) {
    console.log(`${num} 2-nin qüvvətidir.`);
  } else {
    console.log(`${num} 2-nin qüvvəti deyildir.`);
  }
//tapsiriq 3 end


//tapsiriq 4 start
function countDigits(n) {
    return n.toString().length;
  }
  
  let reqem = 23452;
  console.log(countDigits(reqem)); // Output: 5
//tapsiriq 4 end  
  
//tapsiriq 5 start
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    console.log("Arrayın elementlərinin cəmi:", sum);
  }
  
  let array = [1, 2, 3, 4, 5];
  sumArray(array);
//tapsiriq 5 end

//tapsiriq 6 satrt
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  let arrays = [10, 5, 20, 8, 15];
  console.log("Ən böyük element:", findMax(arrays));
  //tapsiriq 6 end

  //tapsiriq 7 start
  function sumFirstAndLast(arr) {
    let sum = arr[0] + arr[arr.length - 1];
    console.log("İlk və son elementlərin cəmi:", sum);
  }
  
  let arra = [3, 7, 2, 9, 5];
  sumFirstAndLast(arra);
  //tapsiriq 7edn
   

  //tapsriq 8 start
  function checkEvenOdd(n) {
    if (n % 2 === 0) {
      console.log(`${n} cütdür.`);
    } else {
      console.log(`${n} təkdir.`);
    }
  }
  
  let nume = 7;
  checkEvenOdd(nume);
//testin 8 end  





//tapsiriq 8 start
function checkDivisibility(n) {
  if (n % 3 === 0 && n % 7 === 0) {
    console.log(`${n} 3-ə və 7-yə bölünür.`);
  } else {
    console.log(`${n} 3-ə və 7-yə bölünmür.`);
  }
}

let numa = 21;
checkDivisibility(numa);
// tapsiriq 8 end
  
// tapsiriq 9 start
function sumIfBothEven(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    let sum = a + b;
    console.log(`n və m hər ikisi cütdür. Cəm: ${sum}`);
  } else {
    console.log("n və m cüt ədədlər deyil.");
  }
}

let a = 4;
let b = 6;
sumIfBothEven(a, b);
//tapsiriq 9 end



//tapsiriq 10 strat
function countOddNumbers(c, e) {
  let count = 0;
  for (let i = c; i <= e; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

let c = 3;
let e = 10;
console.log(countOddNumbers(c, e));
//tapsirq 10 end



//tapsirqi 11 star
function sumOfOddNumbers(d, f) {
  let sum = 0;
  for (let i = d; i <= f; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

let d = 3;
let f = 10;
console.log(sumOfOddNumbers(d, f));
//tapsiriq 11 end



//tapsiriq 12 start
function productOfEvenNumbers(k) {
  let product = 1;
  for (let i = 2; i <= k; i += 2) {
    product *= i;
  }
  return product;
}

let k = 6;
console.log(productOfEvenNumbers(k));
//tapsiriqi 12 end



//tapsiriq 13 start
function checkTemperature(temperature) {
  if (temperature < 15) {
    console.log("Hava soyuqdur");
  } else {
    console.log("Hava istidir");
  }
}

let temp = 20;
checkTemperature(temp);
//tapsriqi 13 end
