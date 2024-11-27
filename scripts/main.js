const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/paintrbush.png") {
    myImage.setAttribute("src", "images/paintrbush.png");
  } else {
    myImage.setAttribute("src", "images/paintbrush2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Art & Color, ${myName}`;
  }

}

  myButton.onclick = () => {
    setUserName();
  };