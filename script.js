//document.querySelector("#button").addEventListener("click",contactme);
//document.querySelector("#menubutton").addEventListener("click",contactme);

function contactme()
{
window.open("file:///H:/project/contact.html");
}
var modal=document.getElementsByClassName("level0")[0];
var btn=document.getElementsByClassName("button")[0];
var span = document.getElementsByClassName("close")[0];
var modal1=document.getElementsByClassName("level1")[0];
var submit1=document.getElementById("submit");
button.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";



}
var closebutton=document.querySelector("#menubutton");
closebutton.onclick = function() {

  modal.style.display = "block";

}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
submit1.onclick=function()
{
  modal1.style.display="block";
}
