
let count = localStorage.getItem("reviewCount") || 0;


count++;


localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = 
  "You have submitted " + count + " review(s).";

  const currentYear = document.querySelector("#currentyear");
const today= new Date();
currentYear.innerHTML = today.getFullYear();

const lastModifiedDate = document.lastModified;
lastModified.innerHTML = lastModifiedDate