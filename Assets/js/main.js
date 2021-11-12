/*
 * MinimizeSidebar for kanboard
 * Licensed under the MIT license - MinimizeSidebar/LICENSE
 * https://github.com/kenlog/MinimizeSidebar
 * Copyright (c) 2019 Valentino Pesce - https://iltuobrand.it
 */

$(document).ready(function () {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.sidebar) {
      $("#sidebar").toggle();
    }
  }

  $("#minimize-sidebar").click(function () {
    $("#sidebar").toggle();

    if (typeof (Storage) !== "undefined") {
      if (localStorage.sidebar) {
        localStorage.removeItem("sidebar");
      }
      else {
        localStorage.setItem("sidebar", 'on');
      }

    }
  });
});
