function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    first = data.get('first').value;
    mood = data.get('mood').value;
    document.getElementById("output_of_website").innerHTML = "The ES welcomes you, " + first + "." +  " We're glad you are doing " + mood + "!";
}