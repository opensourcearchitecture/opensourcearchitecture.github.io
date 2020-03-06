"use strict";

//description button listener
var $description_text = $('.description_text');
var $description_holder = $('.description_holder'); //switch displays on click

$description_text.click(function () {
  $description_text.css("display", "none");
  $description_holder.css("display", "block");
});
$description_holder.click(function () {
  $description_text.css("display", "block");
  $description_holder.css("display", "none");
});
"use strict";

//jquery script
//comment grid button listener
var $1_1_button = $("#1_1_t");
var $1_1_input = $("#1_1_i"); //switch displays on click

$1_1_button.click(function () {
  $1_1_button.css("display", "none");
  $1_1_input.css("display", "inline-block");
});
$1_1_input.click(function () {
  $1_1_button.css("display", "inline-block");
  $1_1_input.css("display", "none");
});
/*switch displays on click
$grid_tile.click(function(){
	$grid_tile.css("display", "none");
	$grid_comment.css("display", "inline-block");
});

$grid_comment.click(function(){
	$grid_tile.css("display", "inline-block");
	$grid_comment.css("display", "none");
});*/
"use strict";

//javascript
//get viewport height/ width for grid dimensions
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //grid generator

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      var tileContainer = document.createElement("div");
      tileContainer.id = "" + rows + "_" + columns;
      tileContainer.className = "tile_container";
      $("#grid_1").append(tileContainer);
    }
  }

  $(".tile_container").width(75 / x - 0.01 + 'vw');
  $(".tile_container").height(75 / x - 0.01 + 'vw');
}

; //clear grid

function clearGrid() {
  $(".tile_container").remove();
}

; //create grid on loading

$(document).ready(function () {
  clearGrid();
  createGrid(10);
});
"use strict";