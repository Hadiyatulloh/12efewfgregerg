let nam = prompt("Ismingizni kiriting:");
let sure = prompt("Familiyangizni kiriting:");
let age = prompt("Yoshingizni kiriting:");

let soz = prompt("1 - Katta harf, 2 - Kichik harf tanlang:");

if (soz === "1") {
    nam = nam.toUpperCase();
    sure = sure.toUpperCase();
} else if (soz === "2") {
    nam = nam.toLowerCase();
    sure = -sure.toLowerCase();
} else {
    alert("Noto'g'ri tanlov!");
}

let t = `Ism: ${nam}`;
let as = `familiya:${sure}`;
let df = `yosh: ${age}`

let resultDiv = document.createElement("div");
let resul = document.createElement("div");
let result = document.createElement("div");

resultDiv.textContent = t;
resul.textContent = as;
result.textContent = df;



resultDiv.style.backgroundColor = "black";
resultDiv.style.color = "white";
resultDiv.style.borderRadius = "16px";
resultDiv.style.padding = "20px";
resultDiv.style.width = "1000px";
resultDiv.style.fontSize = " 80px"

document.body.appendChild(resultDiv);


resul.style.backgroundColor = "black";
resul.style.color = "white";
resul.style.borderRadius = "16px";
resul.style.padding = "20px";
resul.style.width = "1000px";
resul.style.fontSize = " 80px"

document.body.appendChild(resul);



result.style.backgroundColor = "black";
result.style.color = "white";
result.style.borderRadius = "16px";
result.style.padding = "20px";
result.style.width = "1000px";
result.style.fontSize = " 80px"

document.body.appendChild(result);