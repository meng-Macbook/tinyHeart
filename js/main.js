let can1;
let can2;

let ctx1;
let ctx2;

let lastTime;
let deltaTime;

document.body.onload = game;
function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {	
	// 获得canvas context
	can1 = document.getElementById('canvas1'); // first, dust, UI, circle
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById('canvas2'); // background, are, fruits
	ctx2 = can2.getContext("2d");

}

function gameloop() {
	requestAnimFrame(gameloop); //setInterval, setTimeout
	let now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	console.log(deltaTime);
}