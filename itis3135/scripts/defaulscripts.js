function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    let first = document.getElementById('first_name').value;
    let mood = document.getElementById('mood').value;
    document.getElementById("answers").innerHTML = ("The ES welcomes you, " + first + "." + " we're glad you are doing " + mood + "!");
}



/*function diplay_date(){
    date =  new Date();
    date2 = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    seconds = date2.getSeconds();
    minutes = date2.getMinutes();
    hours = date2.getHours();
    document.getElementById("current_date").innerHTML = "The current date is: " + month + "/" + day + "/" + year;
    document.getElementById("current_date").innerHTML = "The current time is: " + hours + ":" + minutes + ":" + seconds;
}*/


