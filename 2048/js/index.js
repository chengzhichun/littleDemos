
window.onload = function(){
	
	var imgs = document.getElementsByTagName('img');
	
	window.onkeydown = function(e){
		
		switch (e.keyCode){
			case 37:
				run([0,1,2,3]);
				run([4,5,6,7]);
				run([8,9,10,11]);
				run([12,13,14,15]);
				break;
			case 38:
				run([0,4,8,12]);
				run([1,5,9,13]);
				run([2,6,10,14]);
				run([3,7,11,15]);
				break;
			case 39:
				run([3,2,1,0]);
				run([7,6,5,4]);
				run([11,10,9,8]);
				run([15,14,13,12]);
				break;
			case 40:
				run([12,8,4,0]);
				run([13,9,5,1]);
				run([14,10,6,2]);
				run([15,11,7,3]);
				break;
		}
		
		create();
	}
	
	
	function run(arr){
		var newArr = _2048([
			Number(imgs[arr[0]].getAttribute('value')),
			Number(imgs[arr[1]].getAttribute('value')),
			Number(imgs[arr[2]].getAttribute('value')),
			Number(imgs[arr[3]].getAttribute('value'))
		]);
		
		for(var i=0;i<newArr.length;i++){
			imgs[arr[i]].setAttribute('value',newArr[i]);
			imgs[arr[i]].src = "img/cube_"+newArr[i]+".png";
		}
	}
	
	function create(){
		
		var random = Math.floor(Math.random()*16);
		if(imgs[random].getAttribute('value') == 0){
			imgs[random].setAttribute('value',2);
			imgs[random].src = "img/cube_2.png";
		}else{
			create();
		}
	}
	
	
	function _2048(arr){

		var newArr = [];
		
		for(var i=0;i<arr.length;i++){
			if(arr[i] !=0){
				
				for(var j=i+1;j<arr.length;j++){
					if(arr[j] != 0){
						break;
					}
				}
				
				if(arr[i] == arr[j]){
					newArr.push(arr[i] + arr[j]);
					i = j;
				}else{
					newArr.push(arr[i]);
				}
			}
		}
		
		for(var i=0;i<arr.length;i++){
			if(!newArr[i]){
				newArr.push(0);
			}
		}
		
		return newArr;
	}
}


