let can1;
let can2;

let ctx1;
let ctx2;

document.body.onload = game;
function game() {
	init()
}

function init() {	
	// 获得canvas context
	can1 = querySelector('#canvas1'); // first, dust, UI, circle
	cx1 = can1.getContext();
	can1 = querySelector('#canvas2'); // first, dust, UI, circle
	cx1 = can1.getContext();
}

function gameloop() {
	requestAnimFrame(gameloop); //setInterval, setTimeout
}