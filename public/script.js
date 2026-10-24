const hour= new Date().getHours();
const name = "Kirui Wesley";
let message;

if (hour < 12){
    message = `Good Morning! I'm ${name}, and Welcome to my site!`;
}else if (hour <18){
    message = `Good afternoon! I'm ${name}, and Welcome to my site!`;
}else{
    message = `Good evening! I'm ${name}, and Welcome to my site`;
}
document.getElementById("greeting").textContent = message

const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleButton.textContent = "Light mode";
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Light mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "Dark mode";
    localStorage.setItem("theme", "light");
  }
});