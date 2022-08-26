/*
 * 描画処理
 */
function draw(stage){
	config.initialize();
	stage.clearWindow();
	
	for(let i=0; i<stage.BLOCK_RAWS; i++){
		for(let j=0; j<stage.BLOCK_COLS; j++){
			//console.log(stage.field[i][j]);
			switch(stage.field[i][j]){
				case config.NON_BLOCK:		// なにもない
					stage.g.fillStyle = config.BACK_COLOR;
					break;
				case config.NORMAL_BLOCK:		// ブロック
					stage.g.fillStyle = config.BLOCK_COLOR;
					break;
				case config.LOCK_BLOCK:		// ブロック（ロック）
					stage.g.fillStyle = config.LOCK_COLOR;
					break;
				case config.CLEAR_BLOCK:		// 消去ブロック
					stage.g.fillStyle = config.BLOCK_COLOR;
					break;
				case config.WALL:		// 壁
					stage.g.fillStyle = config.WALL_COLOR;
					break;
				default:		// 重なったときの色
					stage.g.fillStyle = config.ERROR_COLOR;
			}
			stage.g.fillRect(j*stage.bs, i*stage.bs, stage.bs-1, stage.bs-1);    // 1引いているのはブロック同士の隙間を入れるため
			
		}
	}


}

function draw(stage,mino){
	config.initialize();
	stage.clearWindow();
	
	for(let i=0; i<stage.BLOCK_RAWS; i++){
		for(let j=0; j<stage.BLOCK_COLS; j++){
			//console.log(stage.field[i][j]);
			switch(stage.field[i][j]){
				case config.NON_BLOCK:		// なにもない
					stage.g.fillStyle = config.BACK_COLOR;
					break;
				case config.NORMAL_BLOCK:		// ブロック
					stage.g.fillStyle = config.BLOCK_COLOR;
					break;
				case config.LOCK_BLOCK:		// ブロック（ロック）
					stage.g.fillStyle = config.LOCK_COLOR;
					break;
				case config.CLEAR_BLOCK:		// 消去ブロック
					stage.g.fillStyle = config.BLOCK_COLOR;
					break;
				case config.WALL:		// 壁
					stage.g.fillStyle = config.WALL_COLOR;
					break;
				default:		// 重なったときの色
					stage.g.fillStyle = config.ERROR_COLOR;
			}
			stage.g.fillRect(j*stage.bs, i*stage.bs, stage.bs-1, stage.bs-1);    // 1引いているのはブロック同士の隙間を入れるため
			
		}
	}


}
