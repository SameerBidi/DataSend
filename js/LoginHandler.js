var values = {};

function SubmitValues()
{
  values["user"] = document.getElementById("user").value;
  values["sapid"] = document.getElementById("sapid").value;
  values["mailid"] = document.getElementById("mailid").value;
  values["mno"] = document.getElementById("mno").value;

  localStorage.setItem("values", JSON.stringify(values));

  window.location.href = "display.html";
}