/*We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.*/










function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
 for (let i = 0; i < arr.length; i++) {
    let subarray = arr[i];
    
    // Check if elem is NOT present in the current subarray
    if (subarray.indexOf(elem) === -1) {
      // If elem is NOT found, push the subarray into newArr
      newArr.push(subarray);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));