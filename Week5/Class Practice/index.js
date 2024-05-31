

// Example usage
const arr = [{id:1, name:"Hussain"},{id:1, name:"Danish"},{id:1, name:"Danish"},{id:2, name:"Danish"},{id:3, name:"Danish"}];
const obj = {};

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
      const num = arr[i].name;

      // If the number already exists in the frequencies object, increment its count
      if (obj[num]) {
          obj[num]++;
      } else {
          // If the number does not exist, initialize its count to 1
          obj[num] = 1;
      }
  }

console.log(obj);
