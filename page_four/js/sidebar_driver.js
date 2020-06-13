/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  var temp;
  temp = document.getElementById("left-column").scrollWidth;
  temp = 250 - temp
  document.getElementById("container").style.marginLeft = `${temp}px`;
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("container").style.marginLeft = "0";
}
