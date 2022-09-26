function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    var first = data.getElementById('first_name').value;
    var mood = data.getElementById('mood').value;
    var message = "The ES welcomes you, " + first + "." +  " We're glad you are doing " + mood + "!" 
    alert(message);
}