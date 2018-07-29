let can1;
let can2;

let ctx1;
let ctx2;

let canWidth;
let canHeight;

let lastTime;
let deltaTime;

let bgPic = new Image();

let ane;
let fruit;

let mom;
let baby;

let mx;
let my;

let babyTail = [];
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

	bgPic.src = './src/background.jpg';

	can1.addEventListener('mousemove', onMouseMove, false)

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	for(let i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = './src/babyTail' + i + '.png';
	}
}

function gameloop() {
	window.requestAnimFrame(gameloop); //setInterval, setTimeout
	let now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();

	baby.draw();
}

function onMouseMove(e) {
	if (e.offsetX || e.layerX) {
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	}
}