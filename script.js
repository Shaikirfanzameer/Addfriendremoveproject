var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "friends ";
    istatus.style.color = "green";
    btn.innerHTML="remove friend"
    flag = 1;
  } else {
    istatus.innerHTML = "Stranger  ";
    istatus.style.color = "Red";
    btn.innerHTML="Add friend"
    flag = 0;
  }
});
