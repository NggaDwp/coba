//when user clicks 'GET STARTED' button, redirect to the roomlist page
function buttonStartHere() {
  window.location.href = "roomlist.html";
}

//if user clicks outside of it, close the dropdown
window.onclick = function (event) {
  if (!event.target.matches("#dropdownContentIcon")) {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  } else {
    //this works to replace the dropdownOpen function above
    var dropdown = document.getElementById("dropdownContent");
    dropdown.classList.add("show");
  }
};

//check the current page
function checkPage() {
  if (window.location.href.indexOf("index") > -1) {
    document.getElementById("homeNavButton").classList.add("activePage");
    console.log("home");
    setSlideshowScroll();
  } else if (window.location.href.indexOf("about") > -1) {
    document.getElementById("aboutNavButton").classList.add("activePage");
    console.log("about");
  } else if (window.location.href.indexOf("roomlist") > -1) {
    document.getElementById("roomlistNavButton").classList.add("activePage");
    console.log("roomlist");
  }
}

window.onload = function () {
  checkPage();
  getElementID("initialSelect"); //onload, load the initial room select
};

var imgPosition = 1;
function nextButton() {
  imgPosition++;
  if (imgPosition > 3) imgPosition = 1;
  document.getElementById("slide-image").src =
    "./resources/slide" + imgPosition + ".png";
}

function prevButton() {
  imgPosition--;
  if (imgPosition < 1) imgPosition = 3;
  document.getElementById("slide-image").src =
    "./resources/slide" + imgPosition + ".png";
}

function getElementID(element) {
  //this if check is for the image shown on the page
  var initialSelect = "initialSelect";
  if (element == initialSelect) {
    //checks if the element passed in is the initialSelect
    document.getElementById("Hidden-vip-room1").style.display = "block";
    document.addEventListener("mouseup", function (e) {
      var container = document.getElementById("Hidden-vip-room1");
      if (!container.contains(e.target)) {
        container.style.display = "none";
      }
    });
  } else { //else, the element passed in becomes shown, whatever the element is //?this function could be reworked buut i am tired
    var elementID = element.id;
    var elID =
      "Hidden-" +
      elementID.slice(0, 8) +
      elementID.substr(elementID.length - 1);
    console.log(elID);
    document.getElementById(elID).style.display = "block";
    document.addEventListener("mouseup", function (e) {
      var container = document.getElementById(elID);
      if (!container.contains(e.target)) {
        container.style.display = "none";
      }
    });
  }
}
