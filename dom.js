documentalert ("HELLO");

document.querySelector("h1").innerHTML="Good Bye";
//for console
//selecting an array
document.getElementsByTagName("li")[1].style.color="yellow"
document.getElementsByClassName("btn")[0].style.color="pink";
document.getElementById("man").style.color= "blue";

//querySelector can be used to call a tag,class or id
document.querySelector("#man").style.color = "green";
document.querySelector(".list").style.color="red";

document.querySelector("body a").style.color= "brown";

document.querySelector("li.list");
document.querySelector( "h1#man");
document.querySelectorAll ("list");
document.querySelector( "li a").style.clor=" red";

document.querySelector("h1").style.fontSize= "10rem";

document.querySelector ("button").style.backgroundColor="yellow";