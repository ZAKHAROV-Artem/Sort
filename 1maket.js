
function bdlcl(){
	let button,input,ul,li,a;
	let tyt,pusto,strelaL,strelaR;
	tyt = document.querySelector('.tyt');
	pusto = document.querySelector('.pusto');
	strelaL = document.querySelector('.strelaL')
	strelaR = document.querySelector('.strelaR')
	button = document.querySelector('button');
	input = document.querySelector('.input').value;
	ul = document.querySelector('.ul');
		if(input == ''){
			setTimeout(function(){tyt.style.display = 'block';}, 100);
			setTimeout(function(){pusto.style.display = 'block';}, 400);
			setTimeout(function(){strelaL.style.display = 'block';}, 800);
			setTimeout(function(){strelaR.style.display = 'block';}, 1100);
			setTimeout(function(){
				tyt.style.display = 'none';
				pusto.style.display = 'none';
			}, 2000);
			setTimeout(function(){
				strelaL.style.display = 'none';
				strelaR.style.display = 'none';
			}, 2800);
			setTimeout(function(){
				strelaL.style.display = 'block';
				strelaR.style.display = 'block';
			}, 3300);
			setTimeout(function(){
				strelaL.style.display = 'none';
				strelaR.style.display = 'none';
			}, 3800);
			setTimeout(function(){
				strelaL.style.display = 'block';
				strelaR.style.display = 'block';
			}, 4200);
		}else{
			li = document.createElement('li');
			a =  document.createElement('a');
			a.innerHTML = input;
			li.append(a);
			ul.appendChild(li);
			strelaL.style.display = 'none';
			strelaR.style.display = 'none';
		}
}
function keyup() {
	let uppercase,input,li,a;
 input = document.querySelector('.input');
	uppercase = input.value.toUpperCase();
	li = document.querySelectorAll('li');
	for(i = 0; i < li.length; i++){
		a  = li[i].querySelectorAll('a')[0];
		if(a.innerHTML.toUpperCase().indexOf(uppercase) > -1){
			li[i].style.display = 'block';
		}else{
			li[i].style.display = 'none';
		}
	}
}
