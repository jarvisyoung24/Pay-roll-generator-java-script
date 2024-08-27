const addEmployeesBtn = document.querySelector('#add-employees-btn');
  
function collectEmployees (){

let addEmployees = true;
const employees = [];

while (addEmployees){
const firstName = prompt("enter first name");
const lastName = prompt ("enter last name");
const salary = prompt ("enter salary");

const newEmployee = {
  firstName:  firstName, 
  lastName:  lastName,
  salary:  salary


  
};

employees.push (newEmployee);
addEmployees = confirm ("do you want to add more");

}
return employees
}

const displayAverageSalary = function(employeesArray) {
  if(employeesArray.length === 0){
    console.log("No employees to calculate average salary.");
    return;
  }

let total = 0;

 for (let i = 0; i < employeesArray.length; i++){
  let salary = parseFloat(employeesArray [i].salary);
   
   
  total += salary;
 }


let average = (total/ employeesArray.length);

let formattedAverage = average.toFixed(2);

console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${formattedAverage}`);
};



  const getRandomEmployee = function(employeesArray) {
  const index = Math.floor(Math.random()*employeesArray.length);
  console.log("Congratulations to "+ employeesArray[index].firstName +" "+ employeesArray[index].lastName + ", our random drawing winner!");
};

// addEmployeesBtn.addEventListener('click',function(){
//   const employees = collectEmployees();

// displayAverageSalary(employees);

// getRandomEmployee(employees);

// })





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);