function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    let first = document.getElementById('first_name').value;
    let mood = document.getElementById('mood').value;
    document.getElementById("answers").innerHTML = ("The ES welcomes you, " + first + "." + " we're glad you are doing " + mood + "!");
}

function display_date(){
    let today = new Date().toLocaleDateString();
    let today2 = new Date().toLocaleTimeString();
    document.getElementById("current_date").innerHTML = ("The current Date is: " + today + " The local time is: " + today2);
}

function simpleAddition(){
    //let first_number = document.getElementById("first_number").value;
    //let second_number = document.getElementById("second_number").value;
    let answer = (document.getElementById("first_number").value + document.getElementById("second_number").value);
    document.getElementById("first_function_answer").innerHTML = ("Adding both numbers you get: " + answer);
}


