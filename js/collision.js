// 碰撞检测

// 判断	大鱼与果实的距离
function momFruitsCollision() {
	for(let i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			// 计算长度
			let l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if( l < 900) {
				fruit.dead(i);
			}
		}
	}
}