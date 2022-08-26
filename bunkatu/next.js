class Next{
	constructor(){
		this.next1=getUniqueArray();
		this.next2=getUniqueArray();
	}

	nextBlock(){
		let number=this.next1[0];//next1の先頭を取り出す
		for(let i=0;i<this.next1.length-1;i++){//1つずつ左へずらす
			this.next1[i]=this.next1[i+1];
		}
		this.next1[this.next1.length-1]=this.next2[0];//next1末尾にnext2先頭を格納
		for(let i=0;i<this.next2.length-1;i++){
			this.next2[i]=this.next2[i+1];
		}
		if(this.next2[0]==this.next2[1]){//すべて取り出したら
			this.next2=getUniqueArray();//next2を更新
		}
		//debugNext();
		return number;
	}

	printNext_debug(){
		
	}
}

function getUniqueArray(){
	let marking=new Array(0,0,0,0,0,0,0);//選択済みか否か
	let array=new Array(-1,-1,-1,-1,-1,-1,-1);//ここに情報を格納して値を返す
	
	 //array=new Array(1,1,1,1,1,1,1);return array;
	for(let index=0;index<array.length;index++){
		let num=Math.floor(Math.random()*7);//0~6のうちランダムに1つ表示
		console.log(num);
		if(marking[num]===0){//未選択である
			marking[num]=1;//マーキングする
			array[index]=num;//データ格納
		}else{
			index--;//添え字を動かさないようにする
		}
	}
	return array;
}

