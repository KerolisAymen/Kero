// window.alert("hello");

let x = ["kero", "aymen"];

console.log("hello" + x[0]);

document.querySelector("h2").innerHTML = "KERO";

let x1 = document.getElementsByTagName("p");

if (x1[0].hasAttributes) console.log("YES");
else console.log("NO");



for (let i = 0 ;i<10;i++)
{
let myelement = document.createElement("div");
let myheading = document.createElement("h3");
let myp = document.createElement("p");

myelement.className = "product";


myheading.appendChild(document.createTextNode("product number " + (i+1) ));
myp.appendChild(document.createTextNode("product description"));

myelement.appendChild(myheading);
myelement.appendChild(myp);



document.body.appendChild(myelement);

}

let btn = document.getElementById("add");
console.log(btn); 
btn.onclick = function()
{
    window.alert("you clicked on add button"); 
    let wind = window.createElement(div);
    wind.innerHTML = ""
}


