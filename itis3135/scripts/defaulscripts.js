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
    document.getElementById("current_date").innerHTML = ("The current Date is: " + today + " the local time is: " + today2);
}


