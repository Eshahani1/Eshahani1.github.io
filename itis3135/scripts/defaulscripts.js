function scriptTest(){
    alert("Hey my script is running");
}

function welcoming_user(){
    document.getElementById("question").submit();
    document.getElementById("question").innerHTML = "Welcome" + first_name + ", we are glad you are feeling " + mood + " today";
    
}