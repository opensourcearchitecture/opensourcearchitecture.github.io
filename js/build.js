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
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {}
  }
}
"use strict";