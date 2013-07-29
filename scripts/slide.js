$(function(){

	document.addEventListener('contextmenu', function(e) { 
	  e.preventDefault();
	},false);

	$('.full').on('click',function() {
		document.getElementById('content').webkitRequestFullScreen();
	});

	document.addEventListener('keydown',function(e){
		switch(e.keyCode){
			case 37 :
			turnPage(-1);
			break;
			case 39 : 
			turnPage(1);
			break;
		}
	});

	var hash = window.location.hash.replace('#','');
	if(!hash){return false;}
	
	// load 
	$('#content').load('contents/' + hash,function(){
		$('#content').bind('contextmenu', function(){ return false });

	    $('#content').mousedown(function(event){
	    	if(event.target.nodeName == 'A'){
	    		return false;
	    	}
	        switch (event.which){
	            case 1:
	            turnPage(1);
	            // Left mouse
	            break;
	            case 3:
	            turnPage(-1);
	            // Right mouse.
	            break;
	        }
	    });

	});
});


function turnPage(dir){
	var pages = $('#content article').length;
	var index = ~~(document.getElementById('content').style['webkitTransform'].replace('translateX(','').replace('%)',''))/100 * -1;
	if( (index === 0 && dir === -1 ) || ( (index === pages - 1 ) && dir === 1 ) ) {
		return false;
	}
	index += dir;
	$('#content').css({'webkitTransform':'translateX('+index * (-100)+'%)'});
}
