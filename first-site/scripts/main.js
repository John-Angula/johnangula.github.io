const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/BMW_F90_M5_CS.png") {
    myImage.setAttribute("src", "images/BMW_M5_CS.png");
  } else {
    myImage.setAttribute("src", "images/BMW_F90_M5_CS.png");
  }
};
//setting our variables
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

//function to set the personalized greeting

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent =`BMW M5 CS are fast arent they, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent =`BMW M5 CS are fast arent they ${myName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  