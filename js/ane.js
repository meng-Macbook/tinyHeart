var aneObj = function () {
	// start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.alpha = 0;
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
	for(let i = 0; i < this.num; i++) {
		this.rootx[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
	}
}
aneObj.prototype.draw = function () {

	this.alpha += deltaTime * 0.001;
	let l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(let i = 0; i < this.num; i++) {
		// beginPath, moveTo, lineTo, stroke, storkeStyle, lineWidth, lienCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 150, this.headx[i] + l, this.heady[i]);

		// ctx2.lineTo(this.x[i], canHeight - this.len[i]);
		ctx2.stroke();	
	}
	ctx2.restore();
}