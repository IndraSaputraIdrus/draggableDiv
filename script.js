const wrapper = document.querySelector(".wrapper");
const header = wrapper.querySelector("header");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  wrapper.style.left = left + movementX + "px";
  wrapper.style.top = top + movementY + "px";
}

header.addEventListener("mousedown", function () {
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", function () {
  header.removeEventListener("mousemove", onDrag);
});
