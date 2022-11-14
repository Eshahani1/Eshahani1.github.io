const person = ["Eyaan", "Jared", "Scump"];
const salaries = [10000, 20000, 30000];
let sum = 0;

function displayResults(){
    for(let i = 0; i < salaries.length; i++){
        for(let j =0; i < person.length; j++){
            documet.getElementById("people_in").innerHTML=("The people in the system are: " + j)
            documet.getElementById("salary_in").innerHTML=("The people in the system are: " + i)
        }
    }
}



function displaySalary(){
    for(let i = 0; i<salaries.length; i++){
        sum += salaries[i];
        sum = sum/salaries.length
        document.getElementById("results").innerHTML = ("The average of the salaries is: " + sum);
    }
}

function addSalary(){

}



