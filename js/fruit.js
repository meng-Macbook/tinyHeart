let fruitObj = function () {
	this.alive = []; //bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
	for(let i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003; // [0.003, 0.02);
		let ran = Math.random();
		if (ran < 0.8) {
			this.fruitType[i] = 'orange';
		} else {
			this.fruitType[i] = 'blue';
		}
	}
	this.orange.src = './src/fruit.png';
	this.blue.src = './src/blue.png';
}
fruitObj.prototype.draw = function () {
	for(let i = 0; i < this.num; i++) {
		// draw
		// find on ane, grow, fly up
		let pic;
		if (this.alive[i]) {
			if (this.fruitType[i] === 'blue') {
				pic = this.blue;
			} else {
				pic = this.orange;
			}
			if(this.l[i] <= 14) {
				this.l[i] += this.spd[i] * deltaTime;
			}
			else {
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < 10) {
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function (i) {
	let aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.l[i] = 0;
	this.alive[i] = true;
}
/*fruitObj.prototype.update = function () {
	let num = 0;
	for(let i = 0; i < this.num; i++) {
		if (this.alive[i]) {num++};
	}
}*/

fruitObj.prototype.dead = function (i) {
	this.alive[i] = false;
} 

function fruitMonitor() {
	let num = 0;
	for(let i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) num++;
	}
	if (num < 15) {
		// send fruit;
		sendFruit();
		return;
	}
}

function sendFruit() {
	for(let i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}