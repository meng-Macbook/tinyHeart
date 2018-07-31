let waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}

waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
    for(let i = 0; i < this.num; i++) {
        this.alive[i] = false;
    }
}

waveObj.prototype.draw = function () {
    for(let i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            // draw

        }
    }
}

waveObj.prototype.born = function () {
    for(let i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            // born
            console.log("born");
            return;
        }
    }
}
