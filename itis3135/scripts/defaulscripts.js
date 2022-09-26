function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    var first = data.get('first').value;
    var mood = data.get('mood').value;
    var message = "The ES welcomes you, " + first + "." +  " We're glad you are doing " + mood + "!" 
    document.getElementById("output_of_website").innerHTML = "";
    alert(message);
}