
$(document).ready(function(){
	var imag = 0;
	$('.but').click(function(){
		if (imag == 0){
			$('div').css('opacity','0');
			imag = 1;
		}else
		if(imag == 1){
			$('div').css('opacity','1');
			imag = 0;
		};	
	});
});