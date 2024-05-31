const arr = [1,2,3,4,5,6,7,8,9]


// console.log(arr.forEach(function(item){
//   console.log(item);
  
// }));


const result=arr.map(function(item){
  console.log(item);
  return item % 2== 1;
  
})
console.log(result);