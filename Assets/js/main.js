/*
 * MinimizeSidebar for kanboard
 * Licensed under the MIT license - MinimizeSidebar/LICENSE
 * https://github.com/kenlog/MinimizeSidebar
 * Copyright (c) 2019 Valentino Pesce - https://iltuobrand.it
 */

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('controller') == "TaskViewController" || urlParams.get('controller') == "DashboardController") {
    $(".sidebar").after('<div><button class="btn button-minimize"><i class="fa fa-compress" aria-hidden="true"></i></button></div>');

    if (typeof (Storage) !== "undefined") {
      if (localStorage.sidebar) {
        $(".sidebar").toggle();
      }
    }

    $(".button-minimize").click(function () {
      $(".sidebar").toggle();

      if (typeof (Storage) !== "undefined") {
        if (localStorage.sidebar) {
          localStorage.removeItem("sidebar");
        }
        else {
          localStorage.setItem("sidebar", 'on');
        }
      }
    });
  }
});
