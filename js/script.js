// function go to left
function goLeft(box,speed,distance){
	$('#'+box).animate({marginLeft: distance+'px'},speed);
}

// function go to bottom
function goBottom(box,speed,distance){
	$('#'+box).animate({marginTop: distance+'px'},speed);
}

// function go to right
function goRight(box,speed,distance){
	$('#'+box).animate({marginLeft: distance+'px'},speed);
}

// function go to top
function goTop(box,speed,distance){
	$('#'+box).animate({marginTop: distance+'px'},speed);
}

// Slide animation
function slide(){	
	var width = $(window).width()-100; // get width 
	var height = $(window).height()-100;// get height
	
	// call animation go to left
	goLeft("box1",2000,width);
	goLeft("box2",2200,width-50);
	goLeft("box3",2400,width-100);
	goLeft("box4",2600,width-150);
	
	// call animation go to bottom
	goBottom("box1",2600,height);
	goBottom("box2",2400,height-70);
	goBottom("box3",2200,height-140);
	goBottom("box4",2000,height-210);
	
	// call animation go to right
	goRight("box1",2900,0);
	goRight("box2",2600,70);
	goRight("box3",2300,140);
	goRight("box4",2000,210);
	
	// call animation go to top
	goTop("box1",2000,0);
	goTop("box2",2200,70);
	goTop("box3",2400,140);
	goTop("box4",2600,210);
}