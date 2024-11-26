function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      console.error("Please provide a valid array of numbers.");
      return 0;
    }
  
    return numbers.reduce((sum, num) => {
      if (typeof num !== "number") {
        console.error("All elements in the array must be numbers.");
        return sum;
      }
      return sum + num;
    }, 0);
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5]; // Create an array of numbers
  const total = sumArray(myArray);
  console.log(`The sum of the array is: ${total}`); // Output: The sum of the array is: 15
  