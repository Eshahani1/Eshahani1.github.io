window.onload = function() {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee").focus();
  };
  
  let employee = [];
  let salary = [];
  
  function addSalary() {
  
    let enteredSalary = parseFloat(document.getElementById("salary").value);
    let enteredName = document.getElementById("employee").value;
  
    if (enteredSalary === "") {
      alert("Please enter a valid salary");
      enteredSalary = "";
      document.getElementById("employee").focus();
    } else {
      enteredSalary = parseFloat(enteredSalary);
      employee.push(enteredName);
      salary.push(enteredSalary);
  
      document.getElementById("salary").value = "";
      document.getElementById("employee").focus();
    }
  
  }
  
  function displayResults() {
  
    let average = 0;
    let sum = 0;
    let employeeWithHighestNum = "";
    let maxNum = 0;
  
    for (i = 0; i < salary.length; i++) {
      sum += salary[i];
    }
    average = (sum / salary.length);
  
    for (i = 0; i < salary.length; i++) {
      if (salary[i] > maxNum) {
        maxNum = salary[i];
        employeeWithHighestNum = employee[i];
      }
    }
  
    document.getElementById("results").innerHTML = "The average salary is $" + average.toFixed(2) + " and the highest salary is " + employeeWithHighestNum + "'s, at $" + maxNum.toFixed(2);
  
  }
  
  function displaySalary() {
  
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"
    for (i = 0; i < salary.length; i++) {
      table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    table += "</table>";
  
    document.getElementById("results_table").innerHTML = table;
  
  }
  