
console.log("////////////////////////////// QUESTION 5.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Given an unsorted array of (almost sequential) numbers, return the number that makes the array non-sequential.

//For example, if we were given this array: [5, 2, 4, 6, 1, 3, 8], it would look like this [1, 2, 3, 4, 5, 6, 8] sorted.

//You'll notice that the numbers would be counting up, but for a missing 7. That is the value your function should return


function missingNumber(arr){
    // =========== code starts here =============
  function sortNumber(a,b){
    return a-b
  };
  arr.sort(sortNumber);
  for (var i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i-1]+1){
      return arr[i]
    }
  }
    






    // =========== code ends here ==============
  }
  
missingNumber([5, 2, 4, 6, 1, 3, 8]);
//expected output = 7 because if we ordered this list, the number seven would be missing