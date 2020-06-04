function initMap() {
  var takeaway = {lat: 50.750212, lng: -1.983003};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: takeaway});

  var marker = new google.maps.Marker({position: takeaway, map: map});

  // key = AIzaSyBDyRTmTJDL3YvBF1cMr5BrEpDsYWSQ1Vg
}

/* <!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
--> */
