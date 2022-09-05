//js for toggle menu

let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px"

function menutoggle(){
if(MenuItems.style.maxHeight =="0px")
{
MenuItems.style.maxHeight = "200px";
}
else
{
MenuItems.style.maxHeight ="0px";
}
}

// js for toggle form

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){

RegForm.style.transform = "translateX(0px)";
LoginForm.style.transform = "translateX(0px)";
Indicator.style.transform = "translateX(100px)";
}

function login(){

RegForm.style.transform = "translateX(400px)";
LoginForm.style.transform = "translateX(400px)";
Indicator.style.transform = "translateX(0px)";
}

//js for product image

var singleProduct = document.getElementById("single-product");
var thumbnail = document.getElementsByClassName ("thumbnail");
thumbnail[0].onclick = function(){
singleProduct.src = thumbnail[0].src;
}
thumbnail[1].onclick = function(){
singleProduct.src = thumbnail[1].src;
}
thumbnail[2].onclick = function(){
singleProduct.src = thumbnail[2].src;
}
thumbnail[3].onclick = function(){
singleProduct.src = thumbnail[3].src;
}

thumbnail[4].onclick = function(){
singleProduct.src = thumbnail[4].src;
}