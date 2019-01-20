/*
 * MinimizeSidebar for kanboard
 * Licensed under the MIT license - MinimizeSidebar/LICENSE
 * https://github.com/kenlog/MinimizeSidebar
 * Copyright (c) 2019 Valentino Pesce - https://iltuobrand.it
 */

$(document).ready(function(){
    $("#minimize-sidebar").click(function(){
      $("#sidebar").slideToggle();
    });
});