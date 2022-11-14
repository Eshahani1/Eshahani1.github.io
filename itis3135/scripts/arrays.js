const person = ["Eyaan", "Jared", "Scump"];
const salaries = [10000, 20000, 30000];
let sum = 0;

function displayResults(){

}



function displaySalary(){
    for(let i = 0; i<salaries.length; i++){
        sum += salaries[i];
        document.getElementById("results").innerHTML = ("The average of the salaries is: " + sum);
    }
}

function addSalary(){
    
}



