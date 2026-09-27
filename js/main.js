console.log("HELLO");
const target = document.getElementById("drop-zone");
const mainContent = document.querySelector(".main-content");
let currContent = document.querySelector("#programmer-container");
const profile = document.querySelector("#profile-pic");

// Cancel dragover so that drop can fire
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

//Drop icon onto target zone
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  console.log("Dropping " + data + " inside of drag zone.")
  currContent.style.display ="none";


  switch(data) {
    case "games":
        currContent = document.querySelector("#games-container");
        profile.src = "./images/prof-games.png";
        break;
    case "animation":
        currContent = document.querySelector("#animation-container");
        profile.src = "./images/prof-animate.png";
        break;
    case "programmer":
        currContent = document.querySelector("#programmer-container");
        profile.src = "./images/prof-laptop.png";
        break;
    default:
        console.log("Data given is not an option: " + data);
  }
  currContent.style.display ="block";
  
});

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log("Dragging " + ev.dataTransfer.getData("text"));
}

