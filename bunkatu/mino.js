class Mino{
	//myBlock;
	//x;
	//y;
	//blockNumber
	constructor(number){
		this.x=Math.floor(config.BLOCK_COLS/3);
		this.y=0;
		this.blockNumber=number;
		this.myBlock=minoconfig.getMino(this.blockNumber);

	}
	

	lockBlock(){
		for(let i=0; i<4; i++){
			for(let j=0; j<4; j++){
				if(this.myBlock[i][j]) stage.field[i+this.y][j+this.x] = config.LOCK_BLOCK;
			}
		}	
	}

	clearBlock(){
		for(let i=0; i<4; i++){
			for(let j=0; j<4; j++){
				if(this.myBlock[i][j]) stage.field[i+this.y][j+this.x] = config.NON_BLOCK;
			}
		}
	}

	hitCheck(){
		for(let i=0; i<4; i++){
			for(let j=0; j<4; j++){
				if(stage.field[i+this.y][j+this.x] && this.myBlock[i][j])		return 1;
			}
		}
		return 0;
	}
	putBlock(stage){
		for(let i=0; i<4; i++){
			for(let j=0; j<4; j++){
				if(this.myBlock[i][j])	stage.field[i+this.y][j+this.x] = this.myBlock[i][j];
			}
		}
	}
	moveDown(){
		if(this.nowDown)return true;//排他制御(後々いらないかも)
			this.nowDown=true;
			this.clearBlock();

			let sy=this.y;
			this.y++;
			if(this.hitCheck()){
				console.log("hit");
				this.y = sy;
				this.lockBlock();
				return false;
			}
			console.log("down");
			this.putBlock(stage);
			this.nowDown=false;	
			return true;
	}
	moveLeft(){

			this.clearBlock();
			let sx=this.x;
			this.x--;
			if(this.hitCheck()){
				this.x = sx;
				this.putBlock(stage);
				return false;
			}
			console.log("left");
			this.putBlock(stage);

			return true;
	}
	moveRight(){


			this.clearBlock();
			let sx=this.x;
			this.x++;
			if(this.hitCheck()){
				this.x = sx;
				this.putBlock(stage);
				return false;
			}
			console.log("right");
			this.putBlock(stage);

			return true;
	}
}
this.blockList=new Array();
