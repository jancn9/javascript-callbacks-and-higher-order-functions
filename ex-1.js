// Exercise #1: For Each Function

function forEach(array, operation) {
  let result = [];
  for (let i=0; i < array.length; i++){
  result.push(operation(array[i]))}
  return result
}

function add(salary){
  return salary+5000
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here



newEmployeeSalaries = forEach(employeeSalaries,add)


console.log(newEmployeeSalaries); 
