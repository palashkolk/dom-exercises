const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");


const content = document.createElement("div");
const para=document.createElement("p");
const heading3=document.createElement("h3");
const container2 = document.createElement("div");
const heading1=document.createElement("h1");
const para2=document.createElement("p");


content.classList.add("content");
container2.classList.add("container2");
para.classList.add("red-para");

content.textContent = "This is the glorious text-content!";
para.textContent = "Hey I'm red!";
heading3.textContent = "I'm a blue h3!";
heading1.textContent = "I'm a div";
para2.textContent = "ME TOO!";


para.style.color = "red";
heading3.style.color = "blue";
container2.setAttribute("style", "background:pink; border:1px solid black");

const containerElements=[content, para, heading3, container2];
const container2Elements=[heading1, para2]

for  (let item of container2Elements){
    container2.appendChild(item);
}

for (let item of containerElements){
    container.appendChild(item);
}
// btn.onclick = () => alert("Hello World");

// btn2.addEventListener("click", () => {
//     alert("Hello World");
// });
// btn2.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// btn2.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=> {
    button.addEventListener("click", ()=>{
        alert(button.id);
    })
})