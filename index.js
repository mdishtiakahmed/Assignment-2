// 1.Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.
const calculateSum=(a, b)=>{
    return a+b;
}
console.log(`${calculateSum(10, 20)}`);





// 2.Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.
const isEven=(num)=>{
    let result;
    if (num%2===0){
        result=true;
    }
    else{
        result=false;
    }
    return result;
}
console.log(`${isEven(21)}`);




// 3. Write a function named findMax that takes an array of numbers and returns the largest number from the array.
const findMax=()=>{
    const numberArray=[10, 20, 30, 40];
    return Math.max(...numberArray)
    
}
console.log(`${findMax()}`);





// 4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd numbers.
const filterOddNumbers=()=>{
    const numArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let newArray= numArray.filter(function(odd){
        let oddNumber=(odd%2 ===1);
        return oddNumber
    })
    console.log(newArray);
    
}
filterOddNumbers();






// 5. Write a function named countWords that takes a string and returns the number of words in the string.
function countWords(str) {
    if (!str.trim()) return 0; // Handle empty or whitespace-only strings
    return str.trim().split(/\s+/).length;
}

// Example usage:
console.log(countWords("Hello world!")); 






// 6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(numbers)); 
  
