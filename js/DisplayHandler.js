Display();

function Display()
{
  var values = JSON.parse(localStorage.getItem("values"));

  document.getElementById("user").innerHTML += values["user"];
  document.getElementById("sapid").innerHTML += values["sapid"];
  document.getElementById("mailid").innerHTML += values["mailid"];
  document.getElementById("mno").innerHTML += values["mno"];
}