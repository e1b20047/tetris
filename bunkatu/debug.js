let stage=new Stage("canvas");
let next=new Next();
let mino=new Mino(next.nextBlock());
let player =new Player();
//Mino.putBlock(Stage);
mino.putBlock(stage);
draw(stage,mino);
let fps=config.FPS;
console.log(fps);
let frame=0;
let clock=30;
let flag=true;

let leftFlag=false;
let rightFlag=false;
let downflag=false;
loop();
console.log("脱出");

function loop(){
	
		if(frame%clock==0){//一定時間経過
			downflag=true;
			frame=0;
		}
		addEventListener("keydown",(e)=>{
			switch(e.keyCode){
				case 37:
				leftFlag=true;
				break;

				case 38:

				break;

				case 39:
				rightFlag=true;
				break;

				case 40:
				frame=0;
				downflag=true;
				break;

				
			}
			
		});

		if(downflag){
			flag=mino.moveDown();
			downflag=false;
		}
		if(leftFlag){
			mino.moveLeft();
			leftFlag=false;
		}
		if(rightFlag){
			mino.moveRight();
			rightFlag=false;
		}		
		if(!flag){//下がりきった
			let getScore=stage.lineCheck();
			let nowScore=document.getElementById("score");
			nowScore+=getScore;
			if(getScore>0)stage.deleteLine();
			//mino=new Mino(Math.floor(Math.random()*7));
			mino=new Mino(next.nextBlock());//debug
			
			flag=true;
		}
		console.log(mino.blockNumber+":"+"("+mino.x+","+mino.y+")");
		mino.putBlock(stage);
		draw(stage);
		frame++;
		setTimeout(loop,1000/fps);
}

function clockChange(){
	let num=document.getElementById("number2").value;
	console.log("num:"+num);
	clock=num;
}


