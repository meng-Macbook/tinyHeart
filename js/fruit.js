let fruitObj = function () {
	this.alive = []; //bool
	this.x = [];
	this.y = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
	for(let i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.born(i);
	}
	this.orange.src = './src/fruit.png';
	this.blue.src = './src/blue.png';
}
fruitObj.prototype.draw = function () {
	for(let i = 0; i < this.num; i++) {
		// draw
		// find on ane, grow, fly up
		ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5);

	}
}
fruitObj.prototype.born = function (i) {
	let aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
}
fruitObj.prototype.update = function () {
	let num = 0;
	for(let i = 0; i < this.num; i++) {
		if (this.alive[i]) {num++};
	}
}