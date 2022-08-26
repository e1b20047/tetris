class Stage{
	constructor(id){
		//config.initialize();
		// キャンバスの設定
		this.mode=config.GAME;
		this.BLOCK_SIZE = 24;		// 1ブロックのサイズ
		this.BLOCK_RAWS = 22;	// ステージの高さ（20ライン分をステージとして使用し、上下1ラインはあたり判定とブロックコピー用に使用）
		this.BLOCK_COLS = 12;	// ステージの幅
		this.canvas=document.getElementById(id);
		this.SCREEN_WIDTH = this.BLOCK_SIZE * this.BLOCK_COLS;	// キャンバスの幅
		this.SCREEN_HEIGHT = this.BLOCK_SIZE * this.BLOCK_RAWS;	// キャンバスの高さ
		canvas.width = this.SCREEN_WIDTH;
		canvas.height = this.SCREEN_HEIGHT;
		this.g = canvas.getContext("2d");
		
		this.stage=[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	// ←表示しない
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
			[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];	// ←表示しない
		this.block = 
			[[0,0,0,0],
			 [0,0,0,0],
			 [0,0,0,0],
			 [0,0,0,0]];
			this.field=[
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	// ←表示しない
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];	// ←表示しない
//		console.log("debug:"+this.BLOCK_RAWS+","+this.BLOCK_COLS);
	// ステージデータをコピーする
		this.bs = this.BLOCK_SIZE;
	}


/*
 * ゲーム画面クリア
 */
clearWindow(){
	this.g.fillStyle = config.BACK_COLOR;
	this.g.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
};

setStage(stage){
	// 表示するための配列
	this.field=new Array();
	// 操作ブロックための配列
	this.block = [	[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0]
				];
	// ステージデータをコピーする
	console.log("debug"+this.BLOCK_RAWS+":"+this.BLOCK_COLS);
	for(let i=0; i<this.BLOCK_RAWS; i++){
		for(let j=0; j<this.BLOCK_COLS; j++){
			this.field[i][j] = this.stage[i][j];
			
		}
	}
}

static putBlock(nowBlock){
	for(let i=0; i<4; i++){
		for(let j=0; j<4; j++){
			if(nowBlock.myBlock[i][j])	this.field[i+nowBlock.y][j+nowBlock.x] = nowBlock.myBlock[i][j];
		}
	}
}
lockBlock(block){
	for(let i=0; i<4; i++){
		for(let j=0; j<4; j++){
			if(block.myBlock[i][j]) this.field[i+this.y][j+this.x] = config.LOCK_BLOCK;
		}
	}	
}
putBlock(block){
	for(let i=0; i<4; i++){
		for(let j=0; j<4; j++){
			if(block.myBlock[i][j])	this.field[i+this.y][j+this.x] = block.myBlock[i][j];
		}
	}
}
lineCheck(){
	let count;
	let lineCount = 0;			// 何ライン揃ったか？
	let score=0;
	let clearLine=0;
	for(let i=1; i<this.BLOCK_RAWS-2; i++){
		count = 0;	// 1ライン上に揃ったブロックの数
		for(let j=0; j<this.BLOCK_COLS; j++){		// 右端からチェック
			if(this.field[i][j]!==config.NON_BLOCK) count++;
			else break;
		}
		if(count >= this.BLOCK_COLS){		// 1ライン揃った！
			lineCount++;
			clearLine++;
			for(let j=1; j<this.BLOCK_COLS-1; j++) this.field[i][j] = config.CLEAR_BLOCK;		// 消去ブロックにする
			console.log("lineCount = " + lineCount);
			console.log("clearLine = " + clearLine);

		}
	}
	score+=lineCount;
	if(score!=0)console.log(score);
	return score;		// score
	}
	deleteLine(){
		for(let i=this.BLOCK_RAWS-1; i>=1; i--){		// 下のラインから消去する
			for(let j=1; j<this.BLOCK_COLS-1; j++){	// 右端からチェック
				if(this.field[i][j] == config.CLEAR_BLOCK){
					this.field[i][j] = this.field[i-1][j];			// 一段落とす
					for(let above=i-1; above>=1; above--){	// 	そこからまた上を一段ずつおとしていく
						this.field[above][j] = this.field[above-1][j];
					}
					i++;		// 落としたラインもまた、消去ラインだったときの対処
				}
			}
		}
	}
	


}

