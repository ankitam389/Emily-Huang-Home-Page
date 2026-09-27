console.log("HELLO");
const target = document.getElementById("drop-zone");
const mainContent = document.querySelector(".main-content");

// Cancel dragover so that drop can fire
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

//Drop icon onto target zone
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  console.log("Dropping " + data + " inside of drag zone.")


  switch(data) {
    case "games":
        target.style.background = "green";
        mainContent.style.background = "green";
        break;
    case "animation":
        target.style.background = "yellow";
        mainContent.style.background = "yellow";
        break;
    case "programmer":
        target.style.background = "pink";
        mainContent.style.background = "pink";
        break;
    default:
        console.log("Data given is not an option: " + data);
  }
  
});

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log("Dragging " + ev.dataTransfer.getData("text"));
}

