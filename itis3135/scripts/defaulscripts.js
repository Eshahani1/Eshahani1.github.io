function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    var first = document.getElementById('first_name').value;
    var mood = document.getElementById('mood').value;
    alert("The ES welcomes you, " + first + "." + " we're glad you are doing " + mood + "!");
}

