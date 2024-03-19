const read = document.querySelector(".read");
const btn = document.getElementById("btn");
const email = document.getElementById("email");

/*display and hide content below thw button when the button is clicked*/
function readMore() {
  if (read.style.display === "none") {
    read.style.display = "block";
    btn.innerHTML = "Read less";
  } else {
    read.style.display = "none";
    btn.innerHTML = "Read more";
  }
}
