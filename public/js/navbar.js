function setActiveLink() {
  var currentLocation = window.location.href;
  var menuItems = document.querySelectorAll('ul li a');
  var currentItem = null;

  // Loop through each menu item to check if it's the current location
  menuItems.forEach(function(item) {
    if(currentLocation.includes(item.href)) {
      currentItem = item;
    }
  });

  // Set the active class to the current menu item
  if(currentItem) {
    currentItem.classList.add('active');
  }
}

window.onload = setActiveLink;
