1. Check number is Prime or not


let isPrime = (n) => {
    var divisor = 2;
    while(n>divisor){
        if(n%divisor==0){
            return false;
        }else{
            divisor++;
        }
    }
    return true;
}
console.log(isPrime(17));  //true
console.log(isPrime(27));  //false
console.log(isPrime(137)); //true
console.log(isPrime(237)); //false



2. Prime Factors of a number


let primeFactors = (n) => {
    var factors = [];
    var divisor = 2;
    while(n>2){
        if(n%divisor == 0){
            factors.push(divisor);
            n = n/divisor;
        }else{
            divisor++;
        }
    }
    return factors;
}

console.log(primeFactors(69));  //[3, 23]
console.log(primeFactors(1092)); // [2, 2, 3, 7, 13]


3. Fibonacci Series till nth index


function fibonacciSeries(n) { //1st way
    const series = [0, 1]; // Start with first two Fibonacci numbers
    for (let i = 2; i <= n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series.slice(0, n + 1); // Return series up to nth index
}
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



function fibonacciRecursive(n) {  //2nd way
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const series = fibonacciRecursive(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
}
console.log(fibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



let fibonacci= (n) => { //1st way
  var fab = [0,1];
  if(n<=2){
    return 1;
  }else{
    for(var i=2;i<=n;i++){
      fab[i] = fab[i-1]+fab[i-2];
    }
  }
  return fab[n];
}

console.log(fibonacci(1));  // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(10)); //55



let fibonacci = (n) => {  //2nd way
    var fab = [0,1]
   if(n<=1){
    return n;
  }else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));



4. Greatest Common Divisor of two numbers

let greatestComDiv = (a,b) =>{   //1st way
  let divisor = 2;
  let result = 1;
  while(a>= divisor && b>=divisor){
    if(a%divisor===0 && b%divisor===0){
      result = divisor;
    }
    divisor++;
  }
  return result;
}

console.log(greatestComDiv(14,21)); // 7
console.log(greatestComDiv(7,3));  // 1
console.log(greatestComDiv(69,169));  // 1



let greatestComDiv = (a,b) =>{ // 2nd way
   if(b == 0)
     return a;
   else 
     return greatestComDiv(b, a%b);
}


console.log(greatestComDiv(14,21));
console.log(greatestComDiv(7,3));
console.log(greatestComDiv(69,169));


5. Remove duplicate from an array


let removeDublicates = (arr) =>{ //Using set
  let uniqueArraySet = new Set();
  let uniqueArray = [];
  for(let i=0;i<arr.length;i++){
    if(!uniqueArraySet.has(arr[i])){
        uniqueArray.push(arr[i]);    
        uniqueArraySet.add(arr[i]);
    }
  }
  return uniqueArray;
}

let arr = [14,21,1,1,1,2,3,2,4,5];
console.log(removeDublicates(arr));  // [14, 21, 1, 2, 3, 4, 5]




let removeDublicates = (arr) =>{  //Without using set
  let uniqueArray = [];
  for (i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
  return uniqueArray;
}


let arr = [14,21,1,1,1,2,3,2,4,5];
console.log(removeDublicates(arr));  // [14, 21, 1, 2, 3, 4, 5]





6. Merge two sorted array

let mergeArrays = (arr1,arr2) =>{
  let mergedArray = [];
  let i=0,j=0;
  while(i < arr1.length && j< arr2.length){
    if(arr1[i]<=arr2[j]){
      mergedArray.push(arr1[i]);
      i++;
    }else{
      mergedArray.push(arr2[j]);
      j++;
    }
  }
    
    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
      }
  return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]


7. Swap number without temp

function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}




8. Reverse a string

let reverseString = (str) =>  {
  return str.split('').reverse().join('')
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"


9. Reverse words of a string

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

const originalString = 'vijay rajak';
const reversedWords = reverseWords(originalString);
console.log(reversedWords); // Output: "yajiv kajar"




10. Print First non repeating char

let findFirstNonRepeatingChar = (str) => {
  const charCount = {};

  for (const char of str) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage:
const inputString = 'aabbcdeeffg jjhhhdxc';
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "d"


11. Print First repeating char

let findFirstRepeatingChar = (str) => {
  const charCount = {};

  for (const char of str) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (const char of str) {
    if (charCount[char] === 2) {
      return char;
    }
  }

  return null; // No repeating character found
}

// Example usage:
const inputString = 'aabbcdeeffg jjhhhdxc';
const firstRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstRepeatingChar); // Output: "a"


12. Count the frequency of every char

function countCharFrequency(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}


// Example usage:
const str = "hello world";
const charFrequency = countCharFrequency(str);
console.log(charFrequency);
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   ' ': 1,
//   w: 1,
//   r: 1,
//   d: 1
// }



13. Remove duplicate char

function removeDuplicates(str) {
  const charSet = new Set();
  let result = '';

  for (const char of str) {
    if (!charSet.has(char)) {
      charSet.add(char);
      result += char;
    }
  }

  return result;
}

// Example usage:
const originalString = 'Hello, World!';
const stringWithoutDuplicates = removeDuplicates(originalString);
console.log(stringWithoutDuplicates); // Output: "Helo, Wrd!"




14. Check palindrome


function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

console.log(isPalindrome('madam')) // true
console.log(isPalindrome('toyota'))  // false



15. Find missing number in series

let findMissingNumber = (nums) => {
  const n = nums.length; // Expected length of the array
  const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of numbers in the array
  return totalSum - actualSum; // Missing number
}

// Example usage:
const numbers = [0, 1,2,7, 3, 4, 5];
const missingNumber = findMissingNumber(numbers);
console.log(missingNumber);



16. Sum of two
let sumOfTwo = (arr,target) =>{
  let seenValues =  new Set();
  for(let i=0;i<arr.length;i++){
    let diff = target - arr[i];
    if(seenValues.has(diff)){
      return true;
    }else{
      seenValues.add(arr[i]);
    }
  }
  return false;
}

const numbers = [1, 5, 0, 2, 4];
const targetSum = 8;
const hasSumPair = sumOfTwo(numbers, targetSum);
console.log(hasSumPair);



17. Largest Sum of subarray


function findLargestSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const largestSum = findLargestSum(array);
console.log(largestSum); // Output: 6



18. Sort of an array

let inp1 = [1,2,4,4,7,7,5];

let ascOrder = inp1.sort((a,b) => a - b); // Sort arraye in Ascending order
let decOrder = inp1.sort((a,b) => b-a); // Sort arraye in Decreasing order



19. Find Max from an array

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

const numbers = [1, 5, 0, 2, 4]; 
const maxNum = myArrayMax(numbers);
console.log(maxNum); // 5


20. Find Min from an array
 
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

const numbers = [1, 5, 0, 2, 4]; 
const minNum = myArrayMin(numbers);
console.log(minNum); // 0



21. Binary Search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3 (index of 7)
console.log(binarySearch([1, 3, 5, 7, 9], 4)); // Output: -1 (4 not found)


22. Anagram Check

function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false



23. Counting Vowels and Consonants in a String

function countVowelsConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) vowelCount++;
        else if (char.match(/[a-zA-Z]/)) consonantCount++;
    }
    return { vowelCount, consonantCount };
}

console.log(countVowelsConsonants("hello world"));  // Output: { vowelCount: 3, consonantCount: 7 }


24. Array Flattening (Flatten Nested Arrays)

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // Output: [1, 2, 3, 4, 5]



25. Generate All Subsets of an Array

function getSubsets(arr) {
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]]);
}

console.log(getSubsets([1, 2]));  // Output: [ [], [1], [2], [1, 2] ]
console.log(getSubsets([1, 2, 3]));  // Output: [ [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]



26.  Find Intersection of Two Arrays

function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

console.log(arrayIntersection([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
console.log(arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]




27. Remove All Occurrences of a Given Element in an Array

function removeElement(arr, element) {
    return arr.filter(el => el !== element);
}

console.log(removeElement([3, 2, 2, 3], 3)); // Output: [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: [0, 1, 3, 0, 4]



