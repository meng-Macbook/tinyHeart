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
let babyBody = [];
let babyEye = [];

let momTail = [];
let momEye = [];
let momBodyOrg = [];
let momBodyBlue = [];

let data;

let wave;
let halo;

let dust;
let dustPic = [];

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

    //baby
    for(let i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = './src/babyTail' + i + '.png';
    }
    for(let i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = './src/babyFade' + i + '.png';
    }
    for(let i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = './src/babyEye' + i + '.png';
    }

    //mam
    for(let i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = './src/bigTail' + i + '.png';
    }
	for(let i = 0; i < 2; i++) {
    	momEye[i] = new Image();
    	momEye[i].src = './src/bigEye' + i + '.png';
	}

	data = new dataObj();

    for(let i = 0; i < 8; i++) {
    	momBodyOrg[i] = new Image();
    	momBodyBlue[i] = new Image();
    	momBodyOrg[i].src = "./src/bigSwim" + i + ".png";
    	momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}

    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";

    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    for(let i = 0; i < 7; i++) {
    	dustPic[i] = new Image();
    	dustPic[i].src = './src/dust' + i + ".png";
	}

    dust = new dustObj();
    dust.init();
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
    momBabyCollision();

	baby.draw();

	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e) {
	if (!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
	}
}