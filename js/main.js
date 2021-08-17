'use strict'

// Initialize and add the map
function initMap(): void {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: uluru,
      }
    );
  
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  var
  $card = $('card'),
  currentMousePos = { x: 0, y: 0 },
  mouseFromCenter = { x: 0, y: 0 };
  
  $(document).mousemove(function(event) {
    var
    wHeight= $(window).height(),
    wWidth= $(window).width();
  
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    mouseFromCenter.x = currentMousePos.x - (wWidth / 2);
    mouseFromCenter.y = currentMousePos.y - (wHeight / 2);
    
    console.log(mouseFromCenter.x +", " + mouseFromCenter.y);
  });