//javascript
//get viewport height/ width for grid dimensions
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//grid generator
function createGrid(x) {
	for (var rows=0; rows < x; rows++) {
		for (var columns=0; columns<x; columns++){
			var tileContainer = document.createElement("div");
			tileContainer.id = ""+rows+"_"+columns;
			tileContainer.className = "tile_container";
			$("#grid_1").append(tileContainer);
		}
	}

	$(".tile_container").width(75/x-0.01+'vw');
	$(".tile_container").height(75/x-0.01+'vw');
};

//clear grid
function clearGrid(){
	$(".tile_container").remove();
};

//create grid on loading
$(document).ready(function(){
	clearGrid();
	createGrid(10);
});