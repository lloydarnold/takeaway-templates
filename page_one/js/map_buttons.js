// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDyRTmTJDL3YvBF1cMr5BrEpDsYWSQ1Vg&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function initMap(){
  // JS API is loaded and available
  var takeaway = {lat: 50.750212, lng: -1.983003};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: takeaway});

  var marker = new google.maps.Marker({position: takeaway, map: map});

  // key = AIzaSyBDyRTmTJDL3YvBF1cMr5BrEpDsYWSQ1Vg
};

var button_click = function() {
  alert("Move map marker");
  console.log("called");
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

buttons = document.getElementsByClassName('button')

console.log(buttons.length)
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', button_click);
  console.log(i);
}
